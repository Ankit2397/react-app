import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';


function FlipMovee() {


    const FunctionalArticle = forwardRef((props, ref) => (
        <div ref={ref}>
          {props.articleName}
        </div>
      ));
      
      // you do not have to modify the parent component
      // this will stay as described in the quickstart
      const TopArticles = ({ articles }) => (
        <FlipMove>
          {articles.map(article => (
            <FunctionalArticle key={article.id} {...article} />
          ))}
        </FlipMove>
      );


return(
<FlipMove className="flip-wrapper" style={{ color: 'red' }}>
  <div key="a">Hello</div>
  <div key="b">Worldf</div>
  <div key="c">Worlde</div>
  <div key="d">Worllsd</div>
</FlipMove>

)};

export default FlipMovee;