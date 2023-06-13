import "./cardsfilter.css"
import React from 'react';
function Sir() {
    const update = () => {
        const input = document.getElementById("filter").value.toUpperCase()
        const card = document.getElementsByClassName("item")
        for (let i = 0; i < card.length; i++) {
            var title = card[i].querySelector(".card-title")
            if (title.innerText.toUpperCase().indexOf(input) > -1) {
                card[i].style.display = ""
            }
            else {
                card[i].style.display = "none"
            }
        }

    }
    const btn = document.getElementsByTagName("button")
    const select = document.querySelector(".select")
    const n = document.querySelector("h1")
    for (var b of btn) {
        b.addEventListener("click", (e) => {
            var parent = e.target.parentNode
            var clone = parent.cloneNode(true)
            select.appendChild(clone)
            // if (clone) {
            //     n.onClick = function () {
            //         select.classList.toggle("display")
            //     }
            // }
        })
    }
    return (
        <section>
            <div>
            <h1><i class="fa fa-shopping-cart"></i></h1>
            <input type="text" id="filter" placeholder="filter" onKeyUp={update}></input>
            <div className="container">
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4XfX8II0LM7b7Zfq2GYav5bZ2ADWGlFSzJ2xAmxdj7qkz96E-5irWNqS294qEbt-Cmk&usqp=CAU" />
                    <p>lorem</p>
                    <h4>Fees:Rs.10000</h4>
                    <h3 className="card-title">Python</h3>
                    <button>Add-cart</button>
                </div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU" />
                    <p></p>
                    <h4>Fees:Rs.10000</h4>
                    <h3 className="card-title">HTML</h3>
                    <button>Add-cart</button>
                </div>
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFgvNYe1Ti4Z6XdGJ1xSZyXOoGuNflDCIsiJ5ogFQubN6t2tbF4tQ1XTHPA4HeYErles&usqp=CAU" />
                    <p></p>
                    <h4>Fees:Rs.10000</h4>
                    <h3 className="card-title">Css</h3>
                    <button>Add-cart</button>
                </div>
                <div className="item">
                    <img src="https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?b=1&s=170667a&w=0&k=20&c=pNyw5iN2ee3oK5adyRBr9-w1cPh9hkUGGnc5Q4JfyJM=" style={{ width: "80%" }} />
                    <p></p>
                    <h4>Fees:Rs.10000</h4>
                    <h3 className="card-title">Javascript</h3>
                    <button>Add-cart</button>
                </div>
                <div className="item">
                    <img src="https://pbs.twimg.com/card_img/1633238709574287360/vh7tnUxI?format=png&name=medium" style={{ width: "100%" }} />
                    <p></p>
                    <h4>Fees:Rs.10000</h4>
                    <h3 className="card-title">React Js</h3>
                    <button>Add-cart</button>
                </div>
                <div className="item">
                    <img src="https://dev.java/assets/images/java-logo-vert-blk.png" style={{ width: "60%" }} />
                    <p></p>
                    <h4>Fees:Rs.10000</h4>
                    <h3 className="card-title">Java</h3>
                    <button>Add-cart</button>
                </div>

            </div>
            
            </div>
            <div className="select">

            </div>

        </section>







    )
}
export default Sir;
