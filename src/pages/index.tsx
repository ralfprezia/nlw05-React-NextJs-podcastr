
export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
    
  )
}

export async function getStaticProps() {//feito péla camada do nexte e não nop browser
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //a cada 8 horas gera uma nova chamada na API criando uma nova home//recebe um número em segundos, de quanto e quanto tempo eu quero gerar uma nova versão da página
  }
}
