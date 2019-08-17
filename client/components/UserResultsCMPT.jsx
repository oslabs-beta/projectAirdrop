import React from "react";
import { Bar, Radar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { POINT_CONVERSION_COMPRESSED } from "constants";

const comp = '#ff7043';
const you = '#4dd0e1';
const useStyles = makeStyles({
  card: {
    minWidth: 400
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  }
});

const UserResults = props => {
  const classes = useStyles();
  const cmsq = Object.keys(props.cmsq.responses).map((a, i) => {
    return (
      <li key={i}>
        {" "}
        {a}: {props.cmsq.responses[a]}{" "}
      </li>
    );
  });
  const cnaaq = Object.keys(props.cnaaq.responses).map((a, i) => {
    return (
      <li key={i}>
        {" "}
        {a}: {props.cnaaq.responses[a]}{" "}
      </li>
    );
  });
  const cmsqMeans = Object.keys(props.cmsq.mean).map((a, i) => {
    return (
      <li key={i}>
        {" "}
        {a}: {props.cmsq.mean[a]}{" "}
      </li>
    );
  });
  const cnaaqMeans = Object.keys(props.cnaaq.mean).map((a, i) => {
    return (
      <li key={i}>
        {" "}
        {a}: {props.cnaaq.mean[a]}{" "}
      </li>
    );
  });

  const ltvrData = {
    labels: ["Long Term Verbal Recall"],
    datasets: [
      {
        label: "You",
        backgroundColor: you,
        data: [
          props.ltvr.responses.numberCorrect,
          // props.ltvr.mean
        ],
        // backgroundColor: 'red',
        // borderColor: "#98B9AB"
        fill: false
      },
      {
        label: "Your Competitors",
        backgroundColor: comp,
        data: [props.ltvr.mean]
      }
    ]
  };

  const ltvrOptions = {
    responsive: true,
    title: {
      display: false,
      text:
        "Comparison Score between you and the average score for other Green Berets"
    },
    tooltips: {
      mode: "label"
    },
    hover: {
      mode: "dataset"
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Value"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: props.ltvr.mean + 2
          }
        }
      ]
    }
  };

  const vpsData = {
    labels: ["Visual Processing Speed"],
    datasets: [
      {
        label: "You",
        backgroundColor: you,
        data: [
          props.vps.userResponse.correctResponses
          // props.vps.responses.numberCorrect,
          // props.vps.mean
        ],
        // backgroundColor: 'red',
        // borderColor: "#98B9AB"
        fill: false
      },
      {
        label: "Your Competitors",
        backgroundColor: comp,
        data: [props.vps.mean]
      }
    ]
  };

  const vpsOptions = {
    responsive: true,
    title: {
      display: false,
      text:
        "Comparison Score between you and the average score for other Green Berets"
    },
    tooltips: {
      mode: "label"
    },
    hover: {
      mode: "dataset"
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Value"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: props.vps.mean + 2
          }
        }
      ]
    }
  };

  const wmData = {
    labels: ["Working Memory"],
    datasets: [
      {
        label: "You",
        backgroundColor: you,
        data: [
          props.wm.userResponse.correctResponses,
          // props.wm.mean
        ],
        // backgroundColor: 'red',
        // borderColor: "#98B9AB"
        fill: false
      },
      {
        label: "Your Competitors",
        backgroundColor: comp,
        data: [props.wm.mean]
      }
    ]
  };

  const wmOptions = {
    responsive: true,
    title: {
      display: false,
      text:
        "Comparison Score between you and the average score for other Green Berets"
    },
    tooltips: {
      mode: "label"
    },
    hover: {
      mode: "dataset"
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Value"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: props.wm.mean + 2
          }
        }
      ]
    }
  };

  const irData = {
    labels: ["Image Recognition"],
    datasets: [
      {
        label: "You",
        backgroundColor: you,
        data: [
          props.ir.userResponse.correctResponses
          // props.ir.responses.numberCorrect,
          // props.ltvr.mean
        ],
        // backgroundColor: 'red',
        // borderColor: "#98B9AB"
        fill: false
      },
      {
        label: "Your Competitors",
        backgroundColor: comp,
        data: [props.ir.mean]
      }
    ]
  };

  const irOptions = {
    responsive: true,
    title: {
      display: false,
      text:
        "Comparison Score between you and the average score for other Green Berets"
    },
    tooltips: {
      mode: "label"
    },
    hover: {
      mode: "dataset"
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Value"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: props.ir.mean + 2
          }
        }
      ]
    }
  };
  console.log(
    "what is cmsq mean",
    Object.keys(props.cmsq.mean).map(a => props.cmsq.mean[a])
  );
  console.log(
    "what is cmsq res",
    Object.keys(props.cmsq.responses).map(a => props.cmsq.responses[a])
  );
  console.log("what is cmsq label", props.cmsq.responses);
  const cmsqData = {
    labels: Object.keys(props.cmsq.mean).map(a => {
      if (a === 'DF') a = 'Development Focused';
      if (a === 'DO') a = 'Doubt Oriented';
      if (a === 'FE') a = 'Failure Evander';
      if (a === 'WF') a = 'Win Fixated';
      return a;
    }),
    datasets: [
      {
        label: "You",
        backgroundColor: 'rgba(0, 171, 194, 0.5)',
        data: Object.keys(props.cmsq.responses).map(
          a => props.cmsq.responses[a]
        )
      },
      {
        label: "Your competitors",
        backgroundColor: 'rgba(255, 110, 66, 0.5)',
        data: Object.keys(props.cmsq.mean).map(a => props.cmsq.mean[a])
      }
    ]
  };

  const cmsqOptions = {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Competitive Motivational Styles Questionnaire"
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          "black",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet"
        ]
      },
      ticks: {
        beginAtZero: true
      }
    }
  };

  const cnaaqData = {
    labels: Object.keys(props.cnaaq.mean).map(a => a[0] + a.slice(1).toLowerCase()),
    datasets: [
      {
        label: "You",
        backgroundColor: 'rgba(0, 171, 194, 0.5)',
        data: Object.keys(props.cnaaqResponses).map(
          a => props.cnaaqResponses[a]
        )
      },
      {
        label: "Your Competitors",
        backgroundColor: 'rgba(255, 110, 66, 0.5)',
        data: Object.keys(props.cnaaq.mean).map(a => props.cnaaq.mean[a])
      }
    ]
  };

  const cnaaqOptions = {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Conception of the Nature of Athletic Ability - 2"
    },
    scale: {
      reverse: false,
      gridLines: {
        color: [
          "black",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "indigo",
          "violet"
        ]
      },
      ticks: {
        beginAtZero: true
      }
    }
  };

  const incData = {
    labels: ["INCREMENTAL"],
    datasets: [
      {
        label: "You",
        backgroundColor: you,
        data: [
          props.cnaaqComposite['INCREMENTAL']
        ],
        // backgroundColor: 'red',
        // borderColor: "#98B9AB"
        fill: false
      },
      {
        label: "Your Competitors",
        backgroundColor: comp,
        data: [props.cnaaq.composite['INCREMENTAL']]
      }
    ]
  };

  const incOptions = {
    responsive: true,
    title: {
      display: false,
      text:
        "Comparison Score between you and the average score for other Green Berets"
    },
    tooltips: {
      mode: "label"
    },
    hover: {
      mode: "dataset"
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Value"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: props.ir.mean + 2
          }
        }
      ]
    }
  };

  const entData = {
    labels: ["ENTITY"],
    datasets: [
      {
        label: "You",
        backgroundColor: you,
        data: [
          props.cnaaqComposite['ENTITY']
          // props.ir.responses.numberCorrect,
          // props.ltvr.mean
        ],
        // backgroundColor: 'red',
        // borderColor: "#98B9AB"
        fill: false
      },
      {
        label: "Your Competitors",
        backgroundColor: comp,
        data: [props.cnaaq.composite['ENTITY']]
      }
    ]
  };

  const entOptions = {
    responsive: true,
    title: {
      display: false,
      text:
        "Comparison Score between you and the average score for other Green Berets"
    },
    tooltips: {
      mode: "label"
    },
    hover: {
      mode: "dataset"
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: "Value"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: props.ir.mean + 2
          }
        }
      ]
    }
  };

  // const cmsqMeans = Object.keys(props.cmsq.mean).map((a, i) => {
  //   return <li key={i}> {a}: {props.cmsq.mean[a]} </li>;
  // });
  // const cnaaqMeans = Object.keys(props.cnaaq.mean).map((a, i) => {
  //   return <li key={i}> {a}: {props.cnaaq.mean[a]} </li>;
  // });

  function createData(name, score, mean) {
    return { name, score: score || 0, mean: mean || 0 };
  }

  function createQ(questTrait, score, mean) {
    return { questTrait, score, mean };
  }

  const cmsqRow = Object.keys(props.cmsq.mean).reduce((a, b, c, d) => {
    console.log('what are you', props.cmsq.responses[b])
    let e;
    if (b === 'DF') e = 'Development Focused';
    if (b === 'DO') e = 'Doubt Oriented';
    if (b === 'FE') e = 'Failure Evander';
    if (b === 'WF') e = 'Win Fixated';
    const row = createQ(
      e,
      props.cmsq.responses[b] || 0,
      props.cmsq.mean[b] || 0
    );
    a.push(row);
    return a;
  }, []);
  console.log("cmsqRow", cmsqRow);
//   DEVELOPMENT FOCUSED dimension
// •	Items 4, 7, 9, 19 averaged for the WIN FIXATED dimension
// •	Items 2, 6, 10, 12, 14, 16 averaged for the DOUBT ORIENTED dimension
// •	Items 3, 8, 13, 17, 20 averaged for the FAILURE EVANDER

  const incRow = createQ(
    'Incremental',
    props.cnaaqComposite['INCREMENTAL'],
    props.cnaaq.composite['INCREMENTAL']
  )

  const entRow = createQ(
    'Entity',
    props.cnaaqComposite['ENTITY'],
    props.cnaaq.composite['ENTITY']
  )

  const cnaaqRow = Object.keys(props.cnaaq.mean).reduce((a, b, c, d) => {

    const row = createQ(
      b,
      props.cnaaq.responses[b] || 0,
      props.cnaaq.mean[b] || 0
    );
    a.push(row);
    return a;
  }, [incRow, entRow]);

  const rows = [
    createData(
      "Long Term Verbal Recall",
      props.ltvr.responses.numberCorrect,
      props.ltvr.mean
    ),
    createData(
      "Visual Processing Speed",
      props.vps.userResponse.correctResponses,
      props.vps.mean
    ),
    createData(
      "Working Memory",
      props.wm.userResponse.correctResponses,
      props.wm.mean
    ),
    createData(
      "Image Recognition",
      props.ir.userResponse.correctResponses,
      props.ir.mean
    )
  ];

  return (

    <div>
      <ul>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {/* <div>Long Term Verbal Recall:</div>
              <div>
                Number you got right: {props.ltvr.responses.numberCorrect} / 20{" "}
              </div>
              <div>Compared to other Green Berets: {props.ltvr.mean} / 20 </div> */}
              <Bar data={ltvrData} options={ltvrOptions} />
              {/* <li>VPS:</li> */}
              <Bar data={vpsData} options={vpsOptions} />
              {/* <li>
                Number you got right:{" "}
                {props.vps.userResponse.correctResponses.length} / 6{" "}
              </li>
              <li>Compared to other Green Berets: {props.vps.mean} / 6 </li>

              <li>Working Memory</li> */}
              <Bar data={wmData} options={wmOptions} />
              {/* <li>
                Number you got right:{" "}
                {props.wm.userResponse.correctResponses.length || 0} /{" "}
                {props.wm.correct.length}
              </li>
              <li>
                Compared to other Green Berets : {props.wm.mean || 0} /{" "}
                {props.wm.correct.length}
              </li>

              <li>Image Recognition</li> */}
              <Bar data={irData} options={irOptions} />
              {/* <li>
                Number you got right:{" "}
                {props.ir.userResponse.correctResponses.length || 0} /{" "}
                {props.ir.correct.length}
              </li>
              <li>
                Compared to other Green Berets : {props.ir.mean || 0} /{" "}
                {props.ir.correct.length}
              </li> */}
              <br />
              <br />
              <Radar data={cnaaqData} options={cnaaqOptions} />
              <Bar data={incData} options={incOptions} />
              <Bar data={entData} options={entOptions} />
              {/* <li>CMSQ</li> */}
              <Radar data={cmsqData} options={cmsqOptions} />

              {/* {cmsq} */}
              {/* {cmsqMeans} */}

              {/* {cnaaq} */}
              {/* {cnaaqMeans} */}
            </Typography>
            <Typography variant="h5" component="h2" />
            <Typography className={classes.pos} color="textSecondary" />
            <Typography variant="body2" component="p">
              <br />
            </Typography>
          </CardContent>

          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Section Name</TableCell>
                    <TableCell align="right">Your Score</TableCell>
                    <TableCell align="right">Average Score</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map(row => {
                    return (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.score}</TableCell>
                        <TableCell align="right">{(row.mean * 100).toFixed(2)}</TableCell>
                      </TableRow>
                    );
                  })}

                  <TableRow>
                    <TableCell>
                    Conceptions Of The Nature Of Athletic Ability
                      Questionnaire -- 2
                    </TableCell>
                    <TableCell align="left" />
                  </TableRow>

                  {cnaaqRow.map(row => {
                    return (
                      <TableRow>
                        <TableCell component="th" scope="row">
                        {row.questTrait[0] + row.questTrait.slice(1).toLowerCase()}
                        </TableCell>
                        <TableCell align="right">{row.score}</TableCell>
                        <TableCell align="right">{(row.mean).toFixed(2)}</TableCell>
                      </TableRow>
                    );
                  })}

                  <TableRow>
                    <TableCell component="th" scope="row">
                    Competitive Motivational Styles Questionnaire
                    </TableCell>
                    <TableCell align="left" />
                  </TableRow>

                  {cmsqRow.map(row => {
                    return (
                      <TableRow>
                        <TableCell component="th" scope="row">
                        {row.questTrait}
                        </TableCell>
                        <TableCell align="right">{row.score}</TableCell>
                        <TableCell align="right">{(row.mean).toFixed(2)}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </Card>
      </ul>
    </div>
  );
};

export default UserResults;

// Conception of the Nature of Athletic Ability – 2 Questionnaire

// Biddle, S. J., Wang, C. J., Chatzisarantis, N. L., & Spray, C. M. (2003). Motivation for physical activity in young people: Entity and incremental beliefs about athletic ability. Journal of Sports Sciences, 21, 973-989.

// 12 item instrument:
// •	Items 2, 5, 8 averaged for the LEARN dimension
// •	Items 6, 9, 12 averaged for the IMPROVE dimension
// •	Items 1, 3, 10 averaged for the STABLE dimension
// •	Items 4, 7, 11 averaged for the GIFT dimension
// •	LEARN mean + IMPROVE mean = INCREMENTAL
// •	STABLE mean + GIFT mean = ENTITY

// Competitive Motivational Styles Questionnaire

// Gillham, E., Gillham, A. D., & Burton, D. (2013). Competitive motivational styles questionnaire (CSMQ): Development and preliminary validation. Manuscript in preparation.

// 20 item instrument:
// •	Items 1, 5, 11, 15, 18 averaged for the DEVELOPMENT FOCUSED dimension
// •	Items 4, 7, 9, 19 averaged for the WIN FIXATED dimension
// •	Items 2, 6, 10, 12, 14, 16 averaged for the DOUBT ORIENTED dimension
// •	Items 3, 8, 13, 17, 20 averaged for the FAILURE EVANDER dimension
