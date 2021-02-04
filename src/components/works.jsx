import React, { Component } from "react";
import Work from "./work";
import Navbar from "./navbar";
import AllWorks from "./AllWorks";
import "./works.css";

class Works extends Component {
  state = {
    works: [
      {
        id: 1,
        category: "Développement",
        title: `Lol ChampionStats`,
        description: `Projet personel. Utilisation de données extérieurs grâce au framework React NextJS. Le but est de calculer les statistiques et les dégâts des sorts en fonction des objets équipés et ce pour chaque champion. Projet toujours en cours`,
        img: "./media/works_lol.png",
        link: "https://lol-champions.vercel.app/",
      },

      {
        id: 2,
        category: "Développement",
        title: `Night Visions`,
        description: `Projet scolaire. Les consignes données étaient de concevoir un site web interractif pour un album de musique de notre choix`,
        img: "./media/works_nightVisions.png",
        link: "https://guillaumemeheut.github.io/night-visions/",
      },

      {
        id: 3,
        category: "Développement",
        title: `Color-Selector`,
        description: `Projet personel. Mon but était de concevoir ma première application React et de comprendre le fonctionnement des states et des props notamment.`,
        img: "./media/works_colorSelector.png",
        link: "https://guillaumemeheut.github.io/color-selector/",
      },

      {
        id: 4,
        category: "Graphisme",
        title: `Doodle`,
        description: `Projet scolaire. Créations de deux doodles sur des thèmes choisis personnellement.`,
        img: "./media/works_doodle.png",
        link: null,
      },

      {
        id: 5,
        category: "Graphisme",
        title: `Adèle`,
        description: `Projet scolaire. Nous devions reprendre une pochette d'album déjà existante sur
        l'artiste de notre choix dans un style simplifié.`,
        img: "./media/works_adele.png",
        link: null,
      },
      {
        id: 6,
        category: "Développement",
        title: `Dodge`,
        description: `Projet personel. Mini-jeu où il faut esquiver les balles et ramasser des bonus pour
        monter son score, j'ai utilisé du javascript orienté objet ainsi que NodeJS pour
        communiquer avec une base de données(postgres) pour afficher/actualiser les
        meilleurs scores`,
        img: "./media/works_dodge.png",
        link: "https://d0dge.herokuapp.com/",
      },
      {
        id: 7,
        category: "Web",
        title: `How to rubik's cube`,
        description: `Projet scolaire. Un site web expliquant le fonctionnement du rubik's cube devant être codé en 2 jours.`,
        img: "./media/works_RubiksCube.png",
        link: "https://guillaumemeheut.github.io/Rubiks-cube/",
      },
      {
        id: 8,
        category: "Développement",
        title: `Tic Tac Toe`,
        description: `Projet personel. Le mini-jeu très connue Tic Tac Toe se jouant à 2 joueurs. Ce projet m'as permis d'apprendre à utiliser NodeJS et son framework "Socket.IO".`,
        img: "./media/works_tictactoe.png",
        link: "https://guillaume-tictactoe.herokuapp.com/",
      },
      {
        id: 9,
        category: "Graphisme",
        title: `Le pilote`,
        description: `Projet scolaire. Une affiche lego dans le style Sachplakat inspiré de "Erdt - Opel"`,
        img: "./media/works_lego1.PNG",
        link: null,
      },
      {
        id: 10,
        category: "Graphisme",
        title: `L'heureux`,
        description: `Projet scolaire. Une affiche lego dans le style Sachplakat"`,
        img: "./media/works_lego2.png",
        link: null,
      },
    ],
    indice: 0,
    category: "All",
    classImgWork: "scale scale_active",
    classTextWork: "translate_active",
    classProjects: "myImg myImgActive",
  };

  changeCategory = (e) => {
    this.triggerProjectsClass();
    setTimeout(() => {
      let category = e;
      this.setState({ category: category });
    }, 300);
  };

  changeIndice = (id) => {
    let indice = id - 1;
    this.setState({ indice: indice });
  };

  triggerWorkClass = (id) => {
    let c = "scale scale_unactive";
    let d = "translate_unactive";
    this.setState({ classImgWork: c, classTextWork: d });
    setTimeout(() => {
      this.changeIndice(id);
      setTimeout(() => {
        c = "scale scale_active";
        d = "translate_active";
        this.setState({ classImgWork: c, classTextWork: d });
      }, 600);
    }, 600);
  };

  triggerProjectsClass = (id) => {
    let c = "myImg myImgUnactive";
    this.setState({ classProjects: c });
    setTimeout(() => {
      c = "myImg myImgActive";
      this.setState({ classProjects: c });
    }, 400);
  };

  renderProjects = () => {
    // eslint-disable-next-line
    return this.state.works.map((work) => {
      if (this.state.category === "All" || this.state.category === work.category)
        return (
          <AllWorks
            key={work.id}
            id={work.id}
            img={work.img}
            category={work.category}
            triggerWorkClass={this.triggerWorkClass}
            classProjects={this.state.classProjects}
          />
        );
    });
  };

  render() {
    return (
      <div className="container">
        <Work
          key={this.state.works[this.state.indice].id}
          category={this.state.works[this.state.indice].category}
          title={this.state.works[this.state.indice].title}
          description={this.state.works[this.state.indice].description}
          img={this.state.works[this.state.indice].img}
          link={this.state.works[this.state.indice].link}
          classScale={this.state.classImgWork}
          classTranslate={this.state.classTextWork}
        />
        <Navbar changeCategory={this.changeCategory} />
        <div className="allProjects_container">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default Works;
