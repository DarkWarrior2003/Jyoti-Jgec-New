import React from "react";
import "./cardstyle.css"
const AchievementsCard = (props) => {
  return (
    <div class="main hover:scale-110 transition-transform ">
  <ul class="cards  ">
    <li class="cards_item ">
      <div class="card ">
        <div class="card_image border-[3px]  border-amber-700 h-48">
          <img src={props.img} alt="mixed vegetable salad in a mason jar." />
         
        </div>
        <div class="card_content h-28">
          <h2 class="card_title">{props.title}</h2>
          {/* <div class="card_text">
            <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
              leafy greens and seasonal vegetables, fresh from the farmer's market.
            </p>
            <hr />
            <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
              of protein for $2 more.
            </p>
          </div> */}
        </div>
      </div>
    </li>

    
  </ul>
</div>
  );
};

export default AchievementsCard;
