import styles from './styles.module.scss'
import Header from '../header/index'
import Footer from '../footer/index'
import React from "react";

interface embed {
    title: string
    content: string
    list: string[]
}

function Embed(embed: embed ) {
    return(
        <div className={styles.embed}>
            <div className={styles.title}>
                <h2>{embed.title}</h2>
            </div>
            <div className={styles.content}>
                <p>{embed.content}</p>
            </div>
            <div className={styles.list}>
                <ul>
                    {embed.list.map((it) =>
                        <li>
                            <span className={styles.listTitle}>{it.substring(0, it.indexOf(':')+1)}</span>
                            <span>{it.substring(it.indexOf(':')+1)}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default function UserTerms() {
    const embeds: embed[] = [
        {
            title: "1. Introdução",
            content: "Estes Termos de Uso (\"Termos\", \"Contrato\") estabelecem os termos e condições que regem o seu uso do site de vagas Dev’s Den. Ao usar o Site, você concorda em estar vinculado a estes Termos. Se você não concordar com estes Termos, você não deve usar o Site.\n" +
                "\n" +
                "Definições:",
            list: [
                "Candidato: Um indivíduo que busca emprego através do Site.",
                "Empregador: Uma empresa ou organização que publica vagas de emprego no Site.",
                "Usuário: Qualquer indivíduo que usa o Site, incluindo Candidatos e Empregadores."
            ]
        },
        {
            title: "2. Conta de Usuário",
            content: "Para usar alguns dos recursos do Site, você pode precisar criar uma conta de usuário. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.",
            list: []
        },
        {
            title: "3. Uso do Site",
            content: "Você concorda em usar o Site apenas para fins lícitos e em conformidade com estes Termos. Você concorda em não usar o Site para:",
            list: [
                "Publicar ou transmitir qualquer conteúdo ilegal, prejudicial, ameaçador, abusivo, assediante, difamatório, calunioso, invasivo da privacidade, odioso ou racial, étnico ou de outra forma inadequado.",
                "Publicar ou transmitir qualquer conteúdo que viole os direitos de propriedade intelectual de terceiros.",
                "Fazer upload ou transmitir vírus ou qualquer outro software prejudicial.",
                "Interferir ou interromper o funcionamento do Site ou de qualquer rede conectada ao Site.",
                "Tentar obter acesso não autorizado ao Site ou a qualquer rede conectada ao Site.",
                "Impersonar qualquer pessoa ou entidade.",
                "Falsamente afirmar ou deturpar sua afiliação a qualquer pessoa ou entidade."
            ]
        },
        {
            title: "4. Vagas de Emprego",
            content: "O Site lista vagas de emprego de uma variedade de Empregadores. Não somos responsáveis ​​pela precisão ou veracidade das informações contidas nas vagas de emprego. Você concorda em usar seu próprio julgamento ao avaliar qualquer oportunidade de emprego.",
            list: []
        },
        {
            title: "5. Inscrições em Vagas de Emprego",
            content: "Ao se candidatar a uma vaga de emprego, você concorda em fornecer informações precisas e completas. Você concorda em não se candidatar a qualquer vaga de emprego para a qual você não esteja qualificado.",
            list: []
        },
        {
            title: "6. Direitos de Propriedade Intelectual",
            content: "Somos proprietários ou licenciados de todos os direitos de propriedade intelectual no Site e no seu Conteúdo. Você não pode usar o Site ou o seu Conteúdo sem nossa autorização prévia por escrito.",
            list: []
        },
        {
            title: "7. Links para Terceiros",
            content: "O Site pode conter links para sites de terceiros. Não somos responsáveis ​​pelo conteúdo ou práticas de qualquer site de terceiros. Você concorda em acessar e usar sites de terceiros por sua própria conta e risco.",
            list: []
        },
        {
            title: "8. Rescisão",
            content: "Podemos rescindir ou suspender sua conta e seu acesso ao Site a qualquer momento, sem aviso prévio, por qualquer motivo.",
            list: []
        },
        {
            title: "9. Isenção de Garantias",
            content: "O SITE É FORNECIDO \"NO ESTADO COMO ESTÁ\" E \"CONFORME DISPONÍVEL\". NÃO FAZEMOS NENHUMA GARANTIA, EXPRESSA OU IMPLÍCITA, SOBRE O SITE, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO E NÃO VIOLAÇÃO. NÃO GARANTIMOS QUE O SITE SEJA ININTERRUPTO OU LIVRE DE ERROS. VOCÊ CONCORDA QUE USARÁ O SITE POR SUA CONTA E RISCO.",
            list: []
        },
        {
            title: "10. Limitação de Responsabilidade",
            content: "EM NENHUM CASO SEREMOS RESPONSÁVEIS POR QUALQUER DANOS DIRETOS, INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENTES OU EXEMPLARES, INCLUINDO, MAS NÃO SE LIMITANDO A, LUCROS PERDIDOS, BOA VONTADE, USO, DADOS OU OUTROS DANOS IN TANGÍVEIS, RESULTANTES DE (I) O USO OU A INCAPACIDADE DE USAR O SITE, (II) O ACESSO NÃO AUTORIZADO OU ALTERAÇÃO DE SUAS TRANSMISSÕES OU DADOS, (III) DECLARAÇÕES OU CONDUTA DE QUALQUER TERCEIRO NO SITE, (IV) QUALQUER DANOS CAUSADOS PELO SEU ACESSO OU USO DO SITE, MESMO QUE SEJAMOS AVISADOS DA POSSIBILIDADE DESTES.",
            list: []
        }
    ]

    return(
        <div className={styles.back}>
            <Header />
            <div className={styles.page}>
                <div className={styles.shadow}>
                    <div className={styles.policy}>
                        <div className={styles.title}>
                            <h1>POLÍTICA DE PRIVACIDADE</h1>
                        </div>
                        <div className={styles.items}>
                            {embeds.map(({title, content, list}: embed) => <Embed title={title} content={content} list={list}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}