import React from "react";
import Author from "../fabio.png";

const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xm-12 mb-5">
              <a className="thumbnail">
                <img src={Author} alt="author..."></img>
              </a>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices laoreet tortor non consequat. Sed varius rhoncus eleifend. Suspendisse eu lectus id neque commodo mattis. Etiam a ligula sit amet leo placerat ultricies mollis semper nibh. Praesent vehicula orci ac felis imperdiet, sit amet rhoncus augue molestie. Vestibulum fermentum nulla lorem, in hendrerit libero ultricies nec. Nam urna enim, tempor vel cursus id, posuere id nibh. Duis bibendum arcu vitae arcu tempor, in convallis felis vehicula. Mauris blandit vulputate velit, quis venenatis lectus. Phasellus sodales nunc vel mattis laoreet. Ut laoreet eros at velit malesuada aliquet. Vivamus nec tortor non nunc efficitur luctus a et sapien. Mauris mattis tortor sit amet arcu iaculis sodales. Proin elementum quam ante, eget luctus odio placerat at.

                Pellentesque varius ante quis blandit laoreet. Curabitur at sollicitudin nisl. Maecenas at tristique sapien, vitae mollis dui. Vestibulum condimentum luctus pellentesque. Suspendisse tempus risus ligula, id consectetur mi scelerisque at. Nam id lacus ut eros euismod hendrerit ac commodo arcu. Aenean a nisl id nisi fermentum convallis. Phasellus sagittis lorem vitae velit gravida, facilisis mollis leo dictum. Duis pharetra ipsum erat, nec laoreet eros porttitor nec. Sed at consequat nisl, eget tempus ex. Quisque consectetur velit nec enim consequat ultricies. Praesent placerat ornare quam, et viverra urna scelerisque in. Phasellus mollis eu nisl a laoreet. Morbi placerat neque purus, non placerat lacus posuere in.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe;