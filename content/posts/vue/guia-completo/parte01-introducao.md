+++
title = 'Vue JS Guia Completo - Parte 01 - Introdução'
date = 2024-02-10T20:26:15-03:00
draft = false
categorias = ["frontend", "javascript", "vue"]
autores = ["Carlos Robert"]
avatar = "/images/perfil.webp"
+++

## Introdução

Olá meus **queridos geradores de bugs** (me too, obviously), sejam bem vindo ao **Guia Completo de Vue JS** 😎 do **CODECAVERNA**. O objetivo dessa série de artigos é te apresentar as principais características desse framework javascript tão bacana e ao fim dessa série, se você se dedicou praticando o conteúdo abordado aqui, imagino que estará pronto para criar suas próprias aplicações Vue.

A ideia desse e qualquer outro material compartilhado aqui nesse blog, é que possamos aprender juntos. Portanto se você perceber alguma incoerência no conteúdo técnico, algum erro de português, etc; peço por favor que comentem e entrem em contato para que sejam feitas as devidas correções. Vamos fortalecer mais a comunidade compartilhando conhecimento de forma gratuita e com qualidade! Bora começar! 👊👊👊

👉 Nesse artigo de introdução você não precisa já sair metendo o pau no código 😁 (mas se quiser, você é uma pessoa livre), aqui eu quero apenas te apresentar o Framework e algumas ideias principais. Nos próximos artigos vamos botar a mão na massa e vai ter dica de editor de código, extensões para melhorar sua produtividade e muitas outras coisas bacaninhas que todo Dev gosta.

✅ Durante esses artigos pode ser que você veja algum termo/palavra que a princípio você não entenda ou não faça sentido, não se preocupe, confie no processo de aprendizado, muitos desses termos eu também não entendo direito e quando preciso aplicá-los ou compreendê-los melhor, eu pesquiso! É isso, não dá pra saber e compreender tudo ao mesmo tempo. Sempre dê uma olhada na [documentação oficial do Vue](https://pt.vuejs.org/) (**a propósito, toda traduzida para nosso querido idioma**) e de qualquer outra tecnologia que queira aprender. Muitos termos que você verá em algum artigo dessa série, será melhor explicado em artigos posteriores, portanto, se acalme e o mais importante, curta o processo!!!

**LEMBRETE:** Durante essa série eu vou citar **MUITO** a documentação oficial, porque é simplesmente o melhor lugar para buscarmos as informações, e eu e você precisamos acostumar com isso. Vou tentar implementar nossos próprios exemplos, claro. Mas lembrem-se: a documentação é nossa **best friend**!.

## Pré-requisitos para aprender Vue

Você precisa ter familiaridade básica com HTML, CSS e JavaScript. Se você caiu de paraquedas por aqui e não manja nada dessas tecnologias web ainda, você pode começar aprendendo no site do [MDN](https://developer.mozilla.org/pt-BR/docs/Learn), [W3 Scholls](https://www.w3schools.com/) ou 👉dá um google👈 e descubra a melhor fonte para você. Depois de brincar um pouco com essas tecnologias volte aqui e dê sequência nos seus estudos de Vue.

Futuramente terei nesse blog uma sequência de artigos sobre essas tecnologias(HTML, CSS, JAVASCRIPT), mas se você ainda está lendo esse parágrafo aqui é porque esse futuro ainda não chegou! 😁 **Let's be patient**!

## O que é Vue JS?

Vue (pronunciado como a palavra **view** em inglês ou **viu** em português 😋) é uma abstração da linguagem javascript para a construção de interfaces de usuário. Basicamente você vai utilizar HTML, CSS e Javascript padrão para criar componentes de uma forma declarativa e dessa forma montar interfaces de usuário que podem ser simples ou complexas.

## Framework Progressivo

De acordo a definição da documentação o Vue pode ser utilizado de forma incremental dentro das aplicações web. O que isso quer dizer? Basicamente que você pode usar Vue para construir uma aplicação completa ou usar em pequenas partes de uma aplicação qualquer, seja ela legada ou não. A ideia do progressivo é essa: você pode usar Vue em uma pequena parte ou na aplicação inteira.

## Componente de arquivo único

Citando a documentação oficial do Vue temos:

Um componente de arquivo único, como o nome sugere, encapsula a lógica do componente (JavaScript), o modelo de marcação (HTML), e os estilos (CSS) num único arquivo. Veja o exemplo abaixo tirado da documentação:

```vue
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

Então é isso, basicamente cada componente possui as três áreas de código **`<script>, <style> e <template>`**. E se você viu as palavras **setup, ref e scoped** no código acima e começou a surtar😁, relaxa que é tranquilex demais e nos próximos artigos vamos estudar todos esses detalhes.

## Estilos de API - Composition VS Options

Os componentes Vue podem ser criados usando dois estilos diferentes de API: a API de composição **(Composition API)** ou API de Opções **(Options API)**. Abaixo vou mostrar exemplos de um componente que faz a mesma coisa usando os dois estilos, não se assuste com o código, caso esteja começando a ver Vue por agora, o que é bem provável já que está lendo esse artigo. O objetivo aqui é só apresentar os dois estilos pra você ir sacando as principais diferenças. Nos demais artigos dessas série eu vou concentrar os exemplos, exercícios e projetos usando a API de Composição, mas você pode consultar a documentação a qualquer momento e ver todos os exemplos disponibilizados lá usando os dois padrões de API, é isso mesmo, o Vue 3 está totalmente documentado usando os dois estilos.

### API de Opções (Options API)

Nesse estilo de API usamos um objeto de opções tais como **data**, **methods**, **mounted**, etc. As propriedades definidas por essas opções você pode acessá-las a através do **this**. Veja o exemplo abaixo, também tirado da documentação oficial, **lembre-se, sempre consulte a documentação**.

```vue
<script>
export default {
  // As propriedades retornadas a partir da `data()`
  // tornam-se estados reativos e serão expostas no `this`.
  data() {
    return {
      count: 0,
    };
  },

  // Os métodos são funções que alteram o estado e acionam atualizações.
  // Elas podem ser vinculadas como ouvintes de evento nos
  // modelos de marcação.
  methods: {
    increment() {
      this.count++;
    },
  },

  // Os gatilhos do ciclo de vida são chamados em diferentes fases
  // do ciclo de vida do componente.
  // Esta função será chamada quando o componente estiver montado.
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### API de Composição (Composition API)

Na API de Composição, definimos a lógica do componente importando funções da API. Normalmente você verá nos nossos componentes de arquivo único a área de script com o atributo **setup**, dessa maneira:

```vue
<script setup></script>
```

Esse atributo **setup** permite que o Vue faça algumas transformações no momento da compilação e nos permite escrever menos código na hora de criar/manipular nossos componentes, vamos ver mais sobre isso depois. Veja abaixo um componente que faz a mesma coisa que o mostrado anteriormente mas agora usando o estilo da API de Composição:

```vue
<script setup>
import { ref, onMounted } from "vue";

// o estado reativo
const count = ref(0);

// as funções que alteram o estado e acionam atualizações
function increment() {
  count.value++;
}

// os gatilhos de ciclo de vida
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## Qual estilo de API escolher?

Bom, sobre qual estilo escolher, tanto faz no começo do aprendizado, a documentação sugere escolher o que parecer mais fácil para você. Os dois padrões podem ser usados para cobrir a maioria dos casos de uso, inclusive podem ser usados juntos.

A **API de Opções** normalmente se alinha melhor com um modelo mental baseado em classes, geralmente é mais amigável para quem está começando porque esconde alguns detalhes da característica reativa do Vue.

A **Api de Composição** está mais ligada com a declaração de variáveis de estado reativo de forma mais direta e também compõe o estado da aplicação a partir de várias funções juntas. Como a documentação cita, é uma forma mais livre e exige um entendimento melhor de reatividade no Vue. Em troca, nossos componentes ficam mais flexíveis, melhorando a organização e reutilização dos mesmos.

**RECOMENDAÇÃO**: Aprofunde mais sobre os tópicos abordados aqui, acessando a [Introdução ao Vue](https://pt.vuejs.org/guide/introduction.html) na documentação oficial.

## Conclusão

Então é isso! Chegamos ao fim da **Parte 01** da nossa série de artigos, espero que tenha gostado e te vejo nos próximos capítulos dessa novela. 👏👏👏

A partir da **Parte 02** vamos começar a escrever nossos primeiros componentes Vue direto na nossa máquina e ir passo a passo testando as principais funcionalidades desse framework javascript tão amado.

Até mais meus queridos **GERADORES DE BUGS**!!!
