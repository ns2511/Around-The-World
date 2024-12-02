// NewsItem.js
import React from 'react';

const NewsItem = ({ article }) => {

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  };

  const truncateDescription = (wordLimit) => {
    if (!article.description) return ""; 
    const descriptionWords = article.description.split(" ");
    const titleWords = article.title.split(" ");
    return (descriptionWords.length + titleWords.length) > wordLimit 
      ? descriptionWords.slice(0, wordLimit-titleWords.length).join(" ") + "..." 
      : article.description;
  };

  return (
    <div className='my-3' >
        <div className="card" style={{width: "18rem",height:"26.5rem"}}>
            <img style={{height:"150px",objectFit:"cover"}} src={article.urlToImage?article.urlToImage:"https://img.freepik.com/free-vector/colorful-breaking-news-concept_23-2148507863.jpg?t=st=1725094414~exp=1725098014~hmac=611623f880b9a9baa95432ed6a7c974771b7b14764dc69be1ab134f0c0295cc9&w=1380"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{truncateDescription(24)}</p> 
                <p style={{color:"#007BFF"}} className="card-text"> {formatDate(article.publishedAt)}</p>
                <a href={article.url} target="_blank" rel='noreferrer' className="btn btn-dark">Read More</a>
            </div>
            </div>
      </div>
  );
};

export default NewsItem;



  // sample data for news because after deployment news api ask for upgrade plan.
  
  // let sampleData = [
  //   {
  //     title: "Zuckerberg dines with Trump in Mar-a-Lago",
  //     description:
  //       "Donald Trump dined on Wednesday with Meta CEO Mark Zuckerberg at the president-elect’s Mar-a-Lago club in Florida.",
  //     content:
  //       "FORT LAUDERDALE, Fla. (AP) — Donald Trump dined on Wednesday with Meta CEO Mark Zuckerberg at the president-elect’s Mar-a-Lago club in Florida, bringing together the Facebook founder and the former president who was once banned from that social netwo... [2375 chars]",
  //     url: "https://apnews.com/article/facebook-trump-zuckerberg-meta-03b409b31deb17ecf3c6d8913e999550",
  //     image:
  //       "https://dims.apnews.com/dims4/default/bee997d/2147483647/strip/true/crop/2434x1369+0+127/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F6e%2F04%2F2084f317b2a44ddf702d171b8071%2F87278442f59a4fc5857a32c69f200c75",
  //     publishedAt: "2024-11-28T04:08:00Z",
  //     source: {
  //       name: "The Associated Press",
  //       url: "https://apnews.com",
  //     },
  //   },
  //   {
  //     title:
  //       "Fans savage 'terrible' new song featuring Kim Kardashian and Kanye West's nepo babies North and Chicago",
  //     description:
  //       "Kanye West's daughters were the surprise stars of his new music video for Bomb when he released the video on Wednesday.",
  //     content:
  //       "Kanye West's fans were up in arms after the rapper returned with a 'terrible' new music video for his song bomb, featuring surprise appearances from his and ex-wife Kim Kardashians two daughters.\nThe clip, which appears to show a chase through a post... [8051 chars]",
  //     url: "https://www.dailymail.co.uk/tvshowbiz/article-14135167/kanye-west-daughters-north-chicago-bomb-music-video.html",
  //     image:
  //       "https://i.dailymail.co.uk/1s/2024/11/28/02/92571361-0-image-m-26_1732762267737.jpg",
  //     publishedAt: "2024-11-28T02:33:00Z",
  //     source: {
  //       name: "Daily Mail",
  //       url: "https://www.dailymail.co.uk",
  //     },
  //   },
  //   {
  //     title: "'DWTS' Season 33 Hits 4-Year Audience High With Finale",
  //     description:
  //       "ABC's \"Dancing With the Stars' hit 4-year highs with its Season 33 finale, top-rated primetime entertainment telecast since 'This Is Us' Series finale.",
  //     content:
  //       "ABC‘s Dancing With the Stars posted its best numbers in four years, with its Season 33 finale.\nFacing originals on NBC (including The Voice), Fox and The CW, Tuesday night’s DWTS finale avearged 6.4 million total viewers, the dance competition’s larg... [1547 chars]",
  //     url: "https://tvline.com/ratings/dancing-with-the-stars-season-33-finale-viewers-joey-graziadei-jenna-johnson-winners-1235382787/",
  //     image:
  //       "https://tvline.com/wp-content/uploads/2024/11/dancing-with-the-stars-finale.jpg?w=650",
  //     publishedAt: "2024-11-28T01:48:04Z",
  //     source: {
  //       name: "TVLine",
  //       url: "https://tvline.com",
  //     },
  //   },
  //   {
  //     title:
  //       "Diddy denied bail by third judge as he awaits sex trafficking trial",
  //     description:
  //       "U.S. District Judge Arun Subramanian said in a written ruling that Combs was at “serious risk” of witness tampering and had violated jail rules.",
  //     content:
  //       "NEW YORK (AP) — Sean “Diddy” Combs was denied bail on Wednesday as he awaits a May sex trafficking trial by a judge who cited evidence showing him to be a “serious risk” of witness tampering and proof he has tried to hide prohibited communications wi... [3821 chars]",
  //     url: "https://apnews.com/article/diddy-sean-combs-bail-sex-trafficking-26093908ff98f5bc24308a98561bfd44",
  //     image:
  //       "https://dims.apnews.com/dims4/default/252b701/2147483647/strip/true/crop/4905x2759+0+255/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe6%2F05%2F67eca1dd13fb1d5c97cc3327cdc7%2F9ac78610ea6a499699dd7b7f7c119c8d",
  //     publishedAt: "2024-11-28T01:38:00Z",
  //     source: {
  //       name: "The Associated Press",
  //       url: "https://apnews.com",
  //     },
  //   },
  //   {
  //     title:
  //       'Harvey Weinstein Sues NYC Over "Deplorable Conditions" At Rikers Island Jail',
  //     description:
  //       "Violent conditions at Riker Island jail have left convicted rapist Harvey Weinstein covered in blood, soiled underwear & more a new lawsuit claims",
  //     content:
  //       "Awaiting a new New York trial next year on additional sex crimes charges, Harvey Weinstein seems to be wishing he was spending Thanksgiving behind bars at the Wende Correctional Facility near Buffalo and not at Rikers Island.\nThat’s certainly one of ... [3799 chars]",
  //     url: "https://deadline.com/2024/11/harvey-weinstein-sues-jail-conditions-1236189270/",
  //     image:
  //       "https://deadline.com/wp-content/uploads/2024/11/Rikers-Island-Prison-Harvey-Weinstein.jpg?w=1024",
  //     publishedAt: "2024-11-28T00:41:00Z",
  //     source: {
  //       name: "Deadline",
  //       url: "https://deadline.com",
  //     },
  //   },
  //   {
  //     title: "Tigers win Maui championship",
  //     description:
  //       "No. 4 Auburn beat Memphis 90-76 to win the Maui Invitational championship.",
  //     content:
  //       "“It was great. Our fans travelled. Our kids were excited about playing every single game,” AU coach Bruce Pearl told the Auburn Network. “We dominated and controlled that game. Big win for our program.\nThe 4th-ranked Tigers beat Memphis 90-76 Wednesd... [1348 chars]",
  //     url: "https://auburn.rivals.com/news/tigers-win-maui-championship-auburn-basketball-memphis",
  //     image:
  //       "https://images.rivals.com/image/upload/f_auto,q_auto,t_headline_primary/wbz61ozsuiyeyuqjknqt",
  //     publishedAt: "2024-11-28T00:01:44Z",
  //     source: {
  //       name: "Rivals.com - Auburn",
  //       url: "https://auburn.rivals.com",
  //     },
  //   },
  //   {
  //     title: "Chiefs-Raiders NFL Week 12 predictions from Arrowhead Pride",
  //     description:
  //       "Let’s see what AP staffers (and readers) think about Friday’s game between the Kansas City Chiefs and Las Vegas Raiders.",
  //     content:
  //       "Before the Kansas City Chiefs’ Week 12 game against the Carolina Panthers, the predictions from our panel of Arrowhead Pride contributors averaged to a 29-15 Kansas City victory. That had 24 points of error from the 30-27 final: it missed the point s... [6938 chars]",
  //     url: "https://www.arrowheadpride.com/2024/11/27/24306669/chiefs-raiders-week-13-predictions-from-arrowhead-pride",
  //     image:
  //       "https://cdn.vox-cdn.com/thumbor/091gyWnzVOMFzJMmH2YM3MVUZdo=/0x72:4012x2173/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25759333/1882888921.jpg",
  //     publishedAt: "2024-11-28T00:00:00Z",
  //     source: {
  //       name: "Arrowhead Pride",
  //       url: "https://www.arrowheadpride.com",
  //     },
  //   },
  //   {
  //     title: "Sean “Diddy” Combs Denied Bail After Third Try",
  //     description:
  //       "The court has rebuffed Combs' bids for bail two other times.",
  //     content:
  //       "Sean “Diddy” Combs will stay in prison as he awaits trial, with a federal judge denying his bid for a $50 million bail package.\nU.S District Judge Arun Subramanian on Wednesday found that no conditions of release can assure the safety of the communit... [4069 chars]",
  //     url: "https://www.hollywoodreporter.com/news/general-news/sean-diddy-combs-bail-denied-bail-after-third-try-1236070871/",
  //     image:
  //       "https://www.hollywoodreporter.com/wp-content/uploads/2024/09/GettyImages-1405338113.jpg?w=1440&h=810&crop=1",
  //     publishedAt: "2024-11-27T23:52:38Z",
  //     source: {
  //       name: "Hollywood Reporter",
  //       url: "https://www.hollywoodreporter.com",
  //     },
  //   },
  //   {
  //     title: "Sean ‘Diddy’ Combs is denied bail for a third time",
  //     description:
  //       "Sean “Diddy” Combs will remain in jail after a judge rejected his latest attempt for release while the rapper and music producer awaits trial on charges of sex trafficking and racketeering conspiracy.",
  //     content:
  //       "CNN —\nSean “Diddy” Combs will remain in jail after a judge rejected his latest attempt for release while the rapper and music producer awaits trial on charges of sex trafficking and racketeering conspiracy.\nJudge Arun Subramanian denied Combs’ team’s... [2914 chars]",
  //     url: "https://edition.cnn.com/2024/11/27/entertainment/sean-diddy-combs-denied-bail-third-time/index.html",
  //     image:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/2017-05-02t120000z-842525135-hp1ed52032brw-rtrmadp-3-fashion-metgala-20241010012536886.jpg?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2024-11-27T22:53:00Z",
  //     source: {
  //       name: "CNN",
  //       url: "https://www.cnn.com",
  //     },
  //   },
  //   {
  //     title:
  //       "US to Introduce New Restrictions on China’s Access to Cutting-Edge Chips",
  //     description:
  //       "The new limits, which are expected to be announced Monday, are intended to slow China’s ability to build large and powerful AI models.",
  //     content:
  //       "The Biden administration is expected to announce a sweeping set of measures on Monday designed to further restrain China’s ability to develop advanced artificial intelligence, people familiar with the matter told WIRED. The controls could include san... [2326 chars]",
  //     url: "https://www.wired.com/story/memory-restrictions-china-advanced-chips/",
  //     image:
  //       "https://media.wired.com/photos/674773b8f0dc2ffe9b8c92eb/191:100/w_1280,c_limit/US-China-Chip-Restriction-Business-2186270588.jpg",
  //     publishedAt: "2024-11-27T22:50:09Z",
  //     source: {
  //       name: "WIRED",
  //       url: "https://www.wired.com",
  //     },
  //   },
  // ];

  // useEffect(() => {
  //   setArticles(sampleData);
  // }, []);
