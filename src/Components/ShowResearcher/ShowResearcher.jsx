import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    margin: "10%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  multilineColor: {
    color: "white"
  }
}));

const lerolero = [
  "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a necessidade de renovação processual acarreta um processo de reformulação e modernização dos procedimentos normalmente adotados.",
  "O que temos que ter sempre em mente é que a competitividade nas transações comerciais ainda não demonstrou convincentemente que vai participar na mudança do sistema de participação geral.",
  "O que temos que ter sempre em mente é que a hegemonia do ambiente político é uma das consequências de todos os recursos funcionais envolvidos.",
  "O cuidado em identificar pontos críticos na competitividade nas transações comerciais talvez venha a ressaltar a relatividade das posturas dos órgãos dirigentes com relação às suas atribuições.",
  "Podemos já vislumbrar o modo pelo qual a valorização de fatores subjetivos causa impacto indireto na reavaliação das direções preferenciais no sentido do progresso.",
  "No entanto, não podemos esquecer que o surgimento do comércio virtual promove a alavancagem das direções preferenciais no sentido do progresso.",
  "Por conseguinte, a mobilidade dos capitais internacionais não pode mais se dissociar dos procedimentos normalmente adotados.",
  "Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação representa uma abertura para a melhoria dos procedimentos normalmente adotados.",
  "Neste sentido, a expansão dos mercados mundiais apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados.",
  "Não obstante, o comprometimento entre as equipes nos obriga à análise do retorno esperado a longo prazo.",
  "Podemos já vislumbrar o modo pelo qual a constante divulgação das informações faz parte de um processo de gerenciamento das direções preferenciais no sentido do progresso.",
  "No mundo atual, o início da atividade geral de formação de atitudes apresenta tendências no sentido de aprovar a manutenção dos relacionamentos verticais entre as hierarquias.",
  "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a crescente influência da mídia deve passar por modificações independentemente dos níveis de motivação departamental.",
  "É importante questionar o quanto a adoção de políticas descentralizadoras representa uma abertura para a melhoria do retorno esperado a longo prazo.",
  "Não obstante, a execução dos pontos do programa afeta positivamente a correta previsão dos métodos utilizados na avaliação de resultados.",
  "No entanto, não podemos esquecer que a hegemonia do ambiente político acarreta um processo de reformulação e modernização do levantamento das variáveis envolvidas.",
  "Nunca é demais lembrar o peso e o significado destes problemas, uma vez que o fenômeno da Internet talvez venha a ressaltar a relatividade das condições inegavelmente apropriadas.",
  "Caros amigos, a necessidade de renovação processual aponta para a melhoria do impacto na agilidade decisória.",
  "A nível organizacional, a hegemonia do ambiente político exige a precisão e a definição das condições financeiras e administrativas exigidas.",
  "Ainda assim, existem dúvidas a respeito de como a expansão dos mercados mundiais garante a contribuição de um grupo importante na determinação das direções preferenciais no sentido do progresso."
];

export default function ShowEnterprise(props) {
  const classes = useStyles();
  let { value, image, index } = props.history.location.state;
  let aux = "";

  //Gustavo
  const [search, setValues] = useState({
    value: ""
  });

  const handleChange = prop => event => {
    setValues({ ...search, [prop]: event.target.value });
  };

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = Transition => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const addText = e => {
    if (e.key === "Enter") {
      var node = document.createElement("P");
      var textnode = document.createTextNode(
        "Você: " + document.querySelector("[name='nome']").value
      );
      node.appendChild(textnode);
      document.getElementById("msg").appendChild(node);
      //value.razaoSocial += aux;
      document.querySelector("[name='nome']").value = "";
      console.log("Value.razaoSocial", aux);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <img
              src={image}
              alt={"Imagem de " + value.razaoSocial}
              style={{ width: "100%" }}
            />

            <Typography variant="h4" align="center" color="textPrimary">
              {value.razaoSocial}
            </Typography>
            <Typography variant="subtitle2" align="center">
              {value.areas}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="left" color="textPrimary">
              Dados gerais do pesquisador
            </Typography>
            <Divider style={{ marginBottom: "2%", marginTop: "2%" }} />
            <Typography variant="subtitle2" align="justify" color="textPrimary">
              CPF: {value.CPF}
            </Typography>
            <Typography variant="subtitle2" align="justify" color="textPrimary">
              Telefone: {value.telefone}
            </Typography>
            <Typography variant="subtitle2" align="justify" color="textPrimary">
              Nome: {value.nomeFantasia}
            </Typography>
            <Typography variant="subtitle2" align="justify" color="textPrimary">
              Email: {value.email}
            </Typography>
            <Typography variant="subtitle2" align="justify" color="textPrimary">
              Curso: BCC
            </Typography>
            <Typography variant="subtitle2" align="justify" color="textPrimary">
              Universidade: USP - São Carlos
            </Typography>
            <br></br>
            <Button>
              Clique aqui para acessar o currículo do pesquisador
            </Button>
            <br></br>
            <Typography variant="h4" align="left" color="textPrimary">
              Sobre mim
            </Typography>
            <Divider style={{ marginBottom: "2%", marginTop: "2%" }} />
            <Typography variant="subtitle2" align="justify" color="textPrimary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Button
                onClick={() => {
                    props.history.push("/researchers");
                }}
              >
              Voltar aos pesquisadores
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Fab
        aria-label={"chat"}
        className={classes.fab}
        onClick={handleClick(TransitionUp)}
        color={"primary"}
      >
        <img
          src={image}
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
        ></img>
      </Fab>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={
          <span id="message-id">
            <div id="msg">
              {value.razaoSocial}
              <Divider style={{ marginBottom: "2%", marginTop: "2%" }} />
            </div>
            <br></br>

            <TextField
              InputProps={{
                className: classes.multilineColor
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nome"
              label=""
              name="nome"
              autoFocus
              onKeyDown={e => addText(e)}
            />
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </div>
  );
}
