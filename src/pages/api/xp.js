export async function getStaticProps(context) {
  return {
    props: {
      xp: [
        'JavaScript',
        'TypeScript',
        'React/Redux',
        'Next.js',
        'Material UI',
        'SQL',
        'Postgres',
        'Express.js',
        'Node.js'
      ]
    },
    revalidate: 10
  }
}