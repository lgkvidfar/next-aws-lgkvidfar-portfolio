export default `
body {
    display: block;
}

#globalLoader{
    position: fixed;
    z-index: 1700;
    inset: 0;
    background-color: #1b1b1b;
    margin: 0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: end;

    overflow: hidden;

}

h1 {
    font-size: 15vw;
    font-weight: 700;
    line-height: 1;
    color: #f5f5f5;

    animation: fadeIn 2s ease-in-out infinite forwards;
}

.date {
    font-size: 1.5vw;
    font-weight: 700;
}

 @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
 }
}`
