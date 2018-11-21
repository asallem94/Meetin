import React from 'react';

const Step3 = ({unhideStep}) => {

  return (
    <div id="3" className="step-container  hidden-step">
      <img className="new-group-icon" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
      <form onSubmit={(e)=>unhideStep('4', e)}  className="step-content">
        <h3 className="step-label">STEP 3 OF 4</h3>
        <h1 className="step-action">What will your Meetup's name be?</h1>
        <input type="text" required placeholder="Boardgame Battles" id="title"/>
        <h2 className="city">Describe who should join, and what your Meetup will do.</h2>
        <article className="sample-description">
          <p>“This is a group for anyone interested in hiking, rock climbing, camping, kayaking, bouldering, etc. All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody.”</p>
          <p>“Calling all Chihuahua owners! I'd love for my Chihuahua Becky to meet other Chihuahuas and other small dogs! We'll meet once a week at the park to get together and let our dogs play. We can also meet at the Captain's Table down the street (they allow dogs on their patio!) for some food and drink afterward.”</p>
          <p>“Let's get together for affordable activities in our neighborhood, like going to storytime at the library, having picnics at McCarren Park, and play dates in our homes. We can also have events for just the ladies, like moms night-out, movies, dinner, and anything else that looks like fun.”</p>
        </article>
          <textarea required id="description"/>
        <article className="inline">
        </article>
        <input type="submit" className="continue-button" value="Next"/>
      </form>
    </div>

  );
};

export default Step3;
