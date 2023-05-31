export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    display: flex;
    left: 0,
    right: 0;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: end;

    animation: fadeIn 0.5s ease-in;
}

.loader {
 --clr: #1b1b1b;
 /* color of spining  */
 width: 5rem;
 height: 5rem;
 position: relative;
}
.loader div:nth-child(1), .loader div:nth-child(2) {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 
 width: 100%;
 height: 100%;

 border-radius: 100%;
 border: 1rem solid transparent;
 border-top-color: var(--clr);
}
.loader div:nth-child(1) {
 z-index: 100;
 animation: spin 1s infinite;
}
.loader div:nth-child(2) {
 border: 1rem solid #f5f5f5;
}

@keyframes spin {
 0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }
 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }

 @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

 }
}`
