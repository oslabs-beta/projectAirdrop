echo "Processing deploy.sh"
# Set EB BUCKET as env variable
EB_BUCKET=arn:aws:s3:::elasticbeanstalk-us-west-1-007913098611
# Set the default region for aws cli
aws configure set default.region us-west-1
# Log in to ECR
eval $(aws ecr get-login --no-include-email --region us-west-1)
# Build docker image based on our production Dockerfile
docker build -t legionmpa/mpa .
# tag the image with the Travis-CI SHA
docker tag legionmpa/mpa:latest 007913098611.dkr.ecr.us-west-1.amazonaws.com/legionmpa:$TRAVIS_COMMIT
# Push built image to ECS
docker push 007913098611.dkr.ecr.us-west-1.amazonaws.com/legionmpa:$TRAVIS_COMMIT
# Use the linux sed command to replace the text '<VERSION>' in our Dockerrun file with the Travis-CI SHA key
sed -i='' "s/<VERSION>/$TRAVIS_COMMIT/" Dockerrun.aws.json
# Zip up our codebase, along with modified Dockerrun and our .ebextensions directory
zip -r mpa-prod-deploy.zip Dockerrun.aws.json .ebextensions
# Upload zip file to s3 bucket
aws s3 cp mpa-prod-deploy.zip s3://$EB_BUCKET/mpa-prod-deploy.zip
# Create a new application version with new Dockerrun
aws elasticbeanstalk create-application-version --application-name LegionMPA --version-label $TRAVIS_COMMIT --source-bundle S3Bucket=$EB_BUCKET,S3Key=mpa-prod-deploy.zip
# Update environment to use new version number
aws elasticbeanstalk update-environment --environment-name legionmpa-env --version-label $TRAVIS_COMMIT
