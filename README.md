## Introdução ao ReactJS
### O que é ReactJS?
ReactJS é uma biblioteca JavaScript para construir interfaces de usuário. Desenvolvida pelo Facebook, ela facilita a
criação de aplicações web rápidas, escaláveis e simples de manter.
### Componentes
- **Definição**: Componentes são blocos reutilizáveis de código que representam partes da interface de usuário.
- **Criação**: Demonstrar como criar um componente funcional e um componente de classe.
- **Props e Children**: Explicar como passar dados e componentes filhos para um componente.
```js
import React from 'react';
// Componente funcional
function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}
// Uso do componente
<Welcome name="Sara" />
```
### Estado e Propriedades (State and Props)
- **Props**: Dados imutáveis passados para os componentes.
- **State**: Dados mutáveis que pertencem ao componente.
```js
class Clock extends React.Component {
 constructor(props) {
 super(props);
 this.state = {date: new Date()};
 }
 render() {
 return (
 <div>
 <h1>Hello, world!</h1>
 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
 </div>
 );
 }
}
```
### JSX / TSX
- **JSX**: Sintaxe de extensão que permite escrever código HTML dentro do JavaScript.
- **TSX**: Versão de JSX com suporte para TypeScript.
```js
const element = <h1>Hello, world!</h1>;
```
## Roteamento no React
### React Router
- **Introdução**: Biblioteca para gerenciar rotas em aplicações React.
- **Instalação**: `npm install react-router-dom`
- **Uso Básico**: Configurar rotas básicas.
```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
 return (
 <Router>
 <Switch>
 <Route path="/home">
 <Home />
 </Route>
 <Route path="/about">
 <About />
 </Route>
 </Switch>
 </Router>
 );
}
```
### Navegação entre páginas
- **Link Component**: Navegar entre rotas.
```js
import { Link } from 'react-router-dom';
function Navigation() {
 return (
 <nav>
 <Link to="/home">Home</Link>
 <Link to="/about">About</Link>
 </nav>
 );
}
```
## Gestão de estado
### Estado local e global
- **Local**: Estado gerenciado dentro de um único componente.
- **Global**: Estado compartilhado entre múltiplos componentes (usando Context API, Redux, etc).
### React hooks
- **useState**: Gerenciamento de estado local.
- **useEffect**: Efeitos colaterais e ciclo de vida do componente.
- **useMemo**: Otimização de performance para cálculos pesados.
- **useRef**: Acessar diretamente elementos DOM.
```js
import React, { useState, useEffect, useMemo, useRef } from 'react';
function Example() {
 const [count, setCount] = useState(0);
 const inputRef = useRef();
 useEffect(() => {
 document.title = `You clicked ${count} times`;
 }, [count]);
 const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);
 return (
 <div>
 <p>You clicked {count} times</p>
 <button onClick={() => setCount(count + 1)}>Click me</button>
 <input ref={inputRef} type="text" />
 </div>
 );
}
function computeExpensiveValue(count) {
 // Computação pesada aqui
 return count;
}
```
## Requisições Assíncronas
### Axios e Fetch API
- **Instalação**: `npm install axios`
- **Uso do Axios**: Realizar requisições HTTP.
```js
import axios from 'axios';
axios.get('/user?ID=12345')
 .then(response => {
 console.log(response.data);
 })
 .catch(error => {
 console.log(error);
 });
```
- **Uso da Fetch API**: Alternativa nativa do JavaScript para requisições HTTP.
```js
fetch('https://api.example.com/data')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Error:', error));
```
### Manipulação de dados vindos de APIs
- **Uso em componentes**: Exibir dados recebidos de APIs dentro de componentes React.
```js
function DataFetchingComponent() {
 const [data, setData] = useState([]);
 useEffect(() => {
 fetch('https://api.example.com/data')
 .then(response => response.json())
 .then(data => setData(data));
 }, []);
 return (
 <ul>
 {data.map(item => (
 <li key={item.id}>{item.name}</li>
 ))}
 </ul>
 );
}
```
## Estilização
### CSS
- **Uso de CSS**: Importação e uso de arquivos CSS em componentes React.
```js
import './App.css';
function App() {
 return (
 <div className="App">
 <h1>Hello, world!</h1>
 </div>
 );
}
```
### TailwindCSS
- **Introdução**: Framework utilitário para CSS.
- **Instalação**: `npm install tailwindcss`
- **Configuração**: Adicionar Tailwind ao projeto.
- **Uso Básico**: Aplicação de classes utilitárias.
```js
function App() {
 return (
 <div className="bg-blue-500 text-white p-4">
 <h1 className="text-2xl font-bold">Hello, world!</h1>
 </div>
 );
}
```