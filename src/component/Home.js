import React from 'react'

const Home = () => {
    return (
        <>
            <div className="main d-flex">
                <div className="main_img col-md-10">
                    <h3>Menu Open</h3>
                    <img className="img-fluid" src="https://picsum.photos/1300/700" alt="My" />
                </div>
                <div className="main_list sign col-md-2 mt-5 text-center">
                    <div className="  d-flex flex-column justify-content-center align-item-center">
                        <a href="/#" className=" tdn">Hello</a>
                        <a href="/#" className=" pt-3 tdn">Shop</a>
                    </div>

                    <div className="sign d-flex h50 flex-column justify-content-center align-item-center ">
                        <a href="/#" className="p-2">Signin</a>
                        <a href="/#" className="p-2">Signup</a>
                    </div>

                    <div className="sign d-flex flex-column justify-content-center align-item-center  ">
                        <a href="/#" className="pt-3 ">Contact</a>
                        <a href="/#" className="pt-3 ">Policy</a>
                        <a href="/#" className="pt-3  ">About</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
