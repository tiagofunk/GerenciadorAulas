const NOME_MES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
const NUMERO_DIAS_MES = [31,28,31,30,31,30,31,31,30,31,30,31]

const DIAS_SEMANA = ["D","S","T","Q","Q","S","S"]

const DIA_MES_INICIAL = 3
var deslocamentoAtual = 0
var deslocamentoTotal = DIA_MES_INICIAL
for (let i = 2; i <= 12; i++) {
    criarCalendarioMes(i,deslocamentoTotal)
    deslocamentoAtual = NUMERO_DIAS_MES[i-1]%7
    deslocamentoTotal = (deslocamentoTotal+deslocamentoAtual)%7
}

function criarTituloMes(mes){
    return "<h2 id=\"tituloMes\">"+NOME_MES[mes-1]+"</h2>"
}

function criarDiv(id,conteudo){
    return "<div id=\"" + id + "\">" + conteudo + "</div>"
}

function criarCabecalhoSemana(){
    var conteudo = ""
    DIAS_SEMANA.forEach( (dia) => {
        conteudo += criarDiv("diaSemana",dia)
    })
    return criarDiv(
        "semana", 
        conteudo
    )
}

function criarSemana(mes, diaMesInicio, diaSemanaInicio){
    var conteudo = ""
    var diaAtual = diaMesInicio
    for (let i = 0; i < 7; i++) {
        if( diaAtual < 1|| diaAtual > NUMERO_DIAS_MES[ mes-1 ]){
            conteudo += criarDiv("diaSemana","")
        }else {
            conteudo += criarDiv("diaSemana",diaAtual)
        }
        diaAtual++
    }
    return criarDiv("semana",conteudo)
}

function criarCalendarioMes(mes, iniciarEmQualDiadaSemana ){
    var conteudo = ""
    var diaAtual = 0-iniciarEmQualDiadaSemana+1
    for (let i = 0; diaAtual <= NUMERO_DIAS_MES[mes-1]; i++) {
        conteudo += criarSemana(mes, diaAtual, i!=0?0:iniciarEmQualDiadaSemana )
        diaAtual += 7
    }

    var root = document.getElementById("root")
    root.innerHTML += 
        criarDiv( 
            "mes", 
            criarTituloMes( mes ) +
            criarCabecalhoSemana() +
            conteudo
        )
}