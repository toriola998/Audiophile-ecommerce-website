<template>
    <footer>
        <div class="footer">
            <div>
                <div class="line"></div>
                <img src="./../assets/icons/logo.svg" alt="logo" class="logo"/>

                <nav>
                    <ul class="footer-links">
                        <li>
                            <a>HOME</a></li>
                        <li>
                            <a>HEADPHONES</a></li>
                        <li>
                            <a>SPEAKERS</a></li>
                        <li>
                            <a>EARPHONES</a></li>
                    </ul>
                </nav>
            
                <p class="note">Audiophile is an all in one stop to fulfill your audio needs. We're a
                small team of music lovers and sound specialists who are devoted to helping 
                you get the most out of personal audio. Come and visit our demo facility 
                - we're open 7 days a week.</p>
                <div class="flex footer-flex">
                    <p class="right">Copyright 2021. All Rights Reserved</p>
                    <div class="flex social-media">
                        <img src="./../assets/shared/desktop/icon-facebook.svg" alt="facebook"/>
                        <img src="./../assets/shared/desktop/icon-twitter.svg" alt="twitter"/>
                        <img src="./../assets/shared/desktop/icon-instagram.svg" alt="instagram"/>
                    </div>
                </div>  
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footer {
        background-color: #101010;
        padding: 0 1.5rem 2rem;
    }

    .line {
        background-color: #D87D4A;
        height: 4px;
        width: 6rem;
    }

    .footer .logo,
    .line {
        display: block;
        margin: auto;
    }

    .footer .logo {
        margin: 3rem auto;
    }

    ul {
        list-style-type: none;
    }

    li {
         margin-bottom: 1rem;
         text-align: center;
    }

    li a {
        color: #fff;
        font-weight: 500;
        font-size: .9rem;
    }

    p {
        text-align: center;
        color: #fff;
        opacity: 0.5;
        font-weight: 400;
        line-height: 1.7;
    }

    .note {
       margin: 2rem 0; 
       font-size: 15px;
    }

    .right {
        font-weight: 500;
    }

    .social-media {
        justify-content: space-between;
        width: 6rem;
        margin: 3rem auto 0;
    }

    @media screen and (min-width: 520px) {
        .footer-links {
            display: flex;
        }

        li a {
            padding-right: 2rem ;
        }

        p {
            text-align: unset;
        }

        .social-media{
            margin: unset;
        }

        .footer-flex {
            justify-content: space-between;
        }
        
        .footer .logo {
            margin: 3rem auto 2rem;
            display: unset;
        }
    }

    @media screen and (min-width: 1000px) {
        .footer {
            padding: 0 6rem 2rem;
        }

        .note {
            width: 6  00px;
        }
    }

    @media screen and (min-width: 1200px) {
        .footer {
            padding: 0 10rem 2rem;
        }
    }
</style>