const axios = require('axios')

const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%2701-27-2021%27&$top=100&$format=json'

axios.get(url).then(res => console.log(res.data.value[0].cotacaoVenda))