import React from "react";
import Header from "Header";
import Display from "Display";
import Footer from "Footer";
import ListProducts from "ListProducts";

class Wrapper extends React.Component{

    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <header>
                    <Header/>
                </header>
                <section>
                    <ListProducts/>
                    <Display/>
                </section>
                <footer>
                    <Footer/>
                </footer>

            </div>
        )
    }
}

export default Wrapper