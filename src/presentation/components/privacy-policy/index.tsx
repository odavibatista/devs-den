import styles from "./styles.module.scss";
import Header from "../header/index";
import Footer from "../footer/index";
import React from "react";

interface embed {
  title: string;
  content: string;
  list: string[];
}

function Embed(embed: embed) {
  return (
    <div className={styles.embed}>
      <div className={styles.title}>
        <h2>{embed.title}</h2>
      </div>
      <div className={styles.content}>
        <p>{embed.content}</p>
      </div>
      <div className={styles.list}>
        <ul>
          {embed.list.map((it) => (
            <li>
              <span className={styles.listTitle}>
                {it.substring(0, it.indexOf(":") + 1)}
              </span>
              <span>{it.substring(it.indexOf(":") + 1)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PrivacePolicy() {
  const embeds: embed[] = [
    {
      title: "1. Introdução",
      content:
        'Esta Política de Privacidade ("Política") descreve como o site de vagas de TI Dev’s Den coleta, usa e divulga suas informações pessoais quando você usa o nosso site. Esta Política se aplica a todos os usuários do Site, incluindo candidatos a emprego, recrutadores e empregadores.',
      list: [],
    },
    {
      title: "2. Coleta de informações pessoais",
      content:
        "Coletamos as seguintes informações pessoais quando você usa o nosso Site:",
      list: [
        "Informações que você fornece: Isso inclui informações que você insere no Site, como seu nome, endereço de e-mail, número de telefone, currículo e carta de apresentação. Também coletamos informações que você fornece quando se cadastra para uma conta, se inscreve para receber alertas de vagas de emprego ou se interage com nossos recursos, como fóruns ou chats.\n",
        "Informações coletadas automaticamente: Quando você usa o nosso Site, coletamos automaticamente certas informações sobre seu dispositivo e sua atividade de navegação. Isso inclui seu endereço IP, tipo de navegador, sistema operacional, páginas visitadas e tempo gasto em cada página. Também podemos coletar informações sobre sua localização, se você permitir que seu dispositivo compartilhe essas informações conosco.",
        "Informações de terceiros: Podemos coletar informações sobre você de terceiros, como sites de mídia social ou plataformas de recrutamento online. Também podemos coletar informações sobre você de nossos clientes, como empregadores ou recrutadores.",
      ],
    },
    {
      title: "3. Uso de infomações pessoais",
      content: "Usamos suas informações pessoais para os seguintes fins:",
      list: [
        "Para fornecer os serviços que você solicita: Usamos suas informações pessoais para fornecer os serviços que você solicita, como conectar você com empregadores ou recrutadores, enviar alertas de vagas de emprego e processar suas inscrições em vagas de emprego.",
        "Para melhorar nossos serviços: Usamos suas informações pessoais para melhorar nossos serviços, incluindo o desenvolvimento de novos recursos e a personalização de sua experiência no Site.",
        "Para fins de marketing: Usamos suas informações pessoais para fins de marketing, como enviar e-mails promocionais ou alertas sobre novas vagas de emprego. Você pode cancelar o recebimento de e-mails promocionais a qualquer momento, clicando no link de cancelamento de inscrição na parte inferior do e-mail.",
        "Para fins de pesquisa: Usamos suas informações pessoais para fins de pesquisa, como entender as tendências do mercado de trabalho e as necessidades dos candidatos a emprego.\n",
        "Para fins legais: Usamos suas informações pessoais para fins legais, como cumprir nossas obrigações legais ou defender nossos direitos.",
      ],
    },
    {
      title: "4. Divulgação de informações pessoais",
      content:
        "Podemos divulgar suas informações pessoais para as seguintes partes:",
      list: [
        "Nossos provedores de serviços: Usamos provedores de serviços de terceiros para nos ajudar a fornecer nossos serviços. Esses provedores de serviços podem ter acesso às suas informações pessoais para realizar tarefas em nosso nome.\n",
        "Empregadores e recrutadores: Se você se candidatar a uma vaga de emprego, podemos divulgar suas informações pessoais ao empregador ou recrutador que publicou a vaga.",
        "Autoridades governamentais: Podemos divulgar suas informações pessoais a autoridades governamentais se formos obrigados a fazê-lo por lei ou se acreditarmos que é necessário para proteger nossos direitos ou os direitos de terceiros.",
      ],
    },
    {
      title: "5. Suas escolhas",
      content:
        "Você tem as seguintes opções em relação às suas informações pessoais:",
      list: [
        "Acesso e correção: Você pode acessar e corrigir suas informações pessoais entrando em contato conosco.",
        "Exclusão: Você pode solicitar que excluamos suas informações pessoais entrando em contato conosco.",
        "Cancelamento de inscrição: Você pode cancelar o recebimento de e-mails promocionais clicando no link de cancelamento de inscrição na parte inferior do e-mail.\n",
        "Limitação de processamento: Você pode solicitar que limitemos o processamento de suas informações pessoais entrando em contato conosco.",
        "Portabilidade de dados: Você pode solicitar que forneçamos suas informações pessoais em um formato estruturado, comumente usado e de leitura automática, ou que as transfiramos para outro controlador, entrando em contato conosco.",
      ],
    },
    {
      title: "6. Segurança de dados",
      content:
        "Tomamos medidas de segurança razoáveis para proteger suas informações pessoais contra perda, uso indevido, divulgação não autorizada, acesso, alteração ou destruição. No entanto, nenhuma medida de segurança é perfeita e não podemos garantir que suas informações pessoais estejam completamente seguras.",
      list: [],
    },
    {
      title: "7. Armazenamento de dados",
      content:
        "Armazenamos suas informações pessoais por um período de tempo necessário para cumprir os fins para os quais foram coletadas, a menos que seja exigido um período de retenção mais longo por lei.",
      list: [],
    },
    {
      title: "8. Alterações nesta política",
      content:
        "Podemos atualizar esta Política de tempos em tempos. Se fizermos alterações materiais, notificaremos você por e-mail ou publicando um aviso no Site.",
      list: [],
    },
  ];

  return (
    <div className={styles.back}>
      <Header />
      <div className={styles.page}>
        <div className={styles.shadow}>
          <div className={styles.policy}>
            <div className={styles.title}>
              <h1>POLÍTICA DE PRIVACIDADE</h1>
            </div>
            <div className={styles.items}>
              {embeds.map(({ title, content, list }: embed) => (
                <Embed title={title} content={content} list={list} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
