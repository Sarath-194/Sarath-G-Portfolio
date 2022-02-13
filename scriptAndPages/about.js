let about = document.getElementById("about")
about.innerHTML = `
<section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="images/sarath_profile.JPG" alt=""
                        style="border-radius: 300px; background-color: rgba(146, 139, 139, 0.068);">
                </div>
                <div class="column right">
                    <div class="text">This is Sarath and I'm a <span class="typing-2"></span></div>
                    <p>Aspiring Full Stack Web Developer and capable of writing efficient code using
                        MERN Stack. Ambitious to work and collaborate with other dedicated and enterprising developers.
                        <br>
                        Eager to take up a responsible role within an exciting and inspiring organization, and deliver
                        products that offer a great user experience.
                    </p>
                    <br/>
                    <div class="mediaLinksAbout">
                         <a href="https://www.linkedin.com/in/sarath-g-98117a214/" target="_blank">
                        /    <i class="fab fa-linkedin"></i>
                        / </a>
                        <a href="https://github.com/Sarath-194" target="_blank">
                        /     <i class="fab fa-github"></i>
                        / </a>
                    </div>
                    
                    <a href='mailto:sarathg.in@gmail.com'>
                        <p class="iconsAboutSection"><i class="fas fa-envelope"></i>sarathg.in@gmail.com</p>
                    </a>
                    <a  href="tel:+91 8008850495">
                        <p class="iconsAboutSection"> <i class="fas fa-phone"></i> +91-8008850495</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1v7ueHIdqoxfJSETYNBa7s3VROrrupKph/view?usp=sharing"
                        target="_blank" class="resumeToDrive">Resume</a>
                </div>
            </div>
        </div>
    </section>
`;