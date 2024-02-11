+++
title = 'Vue JS Curso Completo - Parte 01 - Introdução'
date = 2024-02-10T20:26:15-03:00
draft = false
description= ""
categorias = ["web", "javascript", "vue"]
autores = ["Carlos Robert"]
avatar = "/images/perfil.webp"
+++

## Introdução

Olá, seja bem vindo ao **Curso Completo de Vue JS** 😎 do **CODECAVERNA**. O objetivo dessa série de artigos é te apresentar as principais características desse framework javascript tão bacana e ao fim dessa série, se você se dedicou praticando o conteúdo abordado aqui, imagino que você estará pronto para criar suas próprias aplicações Vue. 

A ideia desse e qualquer outro material compartilhado aqui nesse blog, é que possamos aprender juntos. Portanto se você perceber alguma incoerência no conteúdo técnico, algum erro de português, etc; peço por favor que comentem e entrem em contato para que sejam feitas as devidas correções. Vamos fortalecer mais a comunidade compartilhando conhecimento de forma gratuita e com qualidade! Bora começar! 👊👊👊

👉 Nesse artigo de introdução você não precisa já sair metendo o pau no código 😁 (mas se quiser, você é uma pessoa livre), aqui eu quero apenas te apresentar o Framework e algumas ideias principais. Nos próximos artigos vamos botar a mão na massa e vai ter dica de editor de código, extensões para melhorar sua produtividade e muitas outras coisas bacaninhas que todo Dev gosta.

## Pré-requisitos para aprender Vue

Você precisa ter familiaridade básica com HTML, CSS e JavaScript. Se você caiu de paraquedas por aqui e não manja nada dessas tecnologias web ainda, você pode começar aprendendo no site do [MDN](https://developer.mozilla.org/pt-BR/docs/Learn), [W3 Scholls](https://www.w3schools.com/) ou 👉dá um google👈 e descubra a melhor fonte para você. Depois de brincar um pouco com essas tecnologias volte aqui e dê sequência nos seus estudos de Vue. 

Futuramente terei nesse blog uma sequência de artigos sobre essas tecnologias(HTML, CSS, JAVASCRIPT), mas se você ainda está lendo esse parágrafo aqui é porque esse futuro ainda não chegou! 😁 **Let's be patient**!    

## O que é Vue JS? 

Vue (pronunciado como a palavra **view** em inglês ou **viu** em português 😋) é uma abstração da linguagem javascript para a construção de interfaces de usuário. Basicamente você vai utilizar HTML, CSS e Javascript padrão para criar componentes de uma forma declarativa e dessa forma montar interfaces de usuário que podem ser simples ou complexas.

## Framework Progressivo

De acordo a definição da documentação o Vue pode ser utilizado de forma incremental dentro das aplicações web. O que isso quer dizer? Basicamente que você pode usar Vue para construir uma aplicação completa ou usar em pequenas partes de uma aplicação qualquer, seja ela legada ou não. A ideia do progressivo é essa: você pode usar Vue em uma pequena parte ou na aplicação inteira. 

## Componente de arquivo único

Citando a documentação oficial do Vue temos: 

Um componente de arquivo único, como o nome sugere, encapsula a lógica do componente (JavaScript), o modelo de marcação (HTML), e os estilos (CSS) num único arquivo. Veja o exemplo abaixo: 

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
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