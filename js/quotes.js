const quotes = [
    {
        quote: "아침에 눈을 떠서 어제보다 나은 하루를 만들지 않으면, 실패한 것이다.",
        author: "로버트 나델리",
    },
    {
        quote: "상상할 수 없는 꿈을 꾸고 있다면, 상상할 수 없는 노력을 해라.",
        author: "미상",
    },
    {
        quote: "게으른 행동에 대해 하늘이 주는 벌은 두가지이다. 하나는 자신의 실패이고, 또 다른 하나는 내가 하지 않은 일을 해낸 옆사람의 성공이다.",
        author: "줄스 레나드",
    },
    {
        quote: "인생은 스스로 알아서 하지 않으면 아무도 아무것도 가르쳐 주지 않는다.",
        author: "빌게이츠",
    },
    {
        quote: "나는 바보가 된 기분입니다. 나는 기회를 놓쳤다 생각했는데, 우리는 이를 만회하기 위하여 더욱 열심히 일을 했습니다.",
        author: "스티브 잡스",
    },
    {
        quote: "당신이 어려움을 겪고 항복하지 않기로 결정할 때, 그것이 힘이다.",
        author: "아놀드 슈왈제네거",
    },
    {
        quote: "불가능을 하는 것은 좀 재미있다.",
        author: "월트 디즈니",
    },
    {
        quote: "나보다 시작이 나은 선수들이 있겠지만, 나는 끝이 강한 선수다",
        author: "우사인 볼트",
    },
    {
        quote: "힘든 시간들은 절대로 오래가지 않지만, 강인한 사람들은 오래 간다.",
        author: "로버트 슐러",
    },
    {
        quote: "나는 인생에서 몇 번이고 반복해서 실패했고 그것이 내가 성공하는 이유이다.",
        author: "마이클 조던",
    }
]
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;