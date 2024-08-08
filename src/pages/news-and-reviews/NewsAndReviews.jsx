import React, { useState, useEffect } from 'react';
import CarRecomender from '../../components/newsAndReviews/carRecomender/CarRecomender';
import SubscribeBanner from '../../components/newsAndReviews/subscribeBanner/SubscribeBanner';
import SearchBar from '../../components/newsAndReviews/searchBar/SearchBar';
import dummyNews from '../../assets/data/newsAndReviews/dummyNews';
import UpcomingCars from '../../components/newsAndReviews/upcomingCars/UpcomingCars';
import LatestCars from '../../components/newsAndReviews/latestCars/LatestCars';
import Pagination from '../../components/newsAndReviews/pagination/Pagination';
import './NewsAndReviews.css';
import '../../components/newsAndReviews/carRecomender/CarRecomender.css';
import '../../components/newsAndReviews/subscribeBanner/SubscribeBanner.css';
import '../../components/newsAndReviews/upcomingCars/UpcomingCars.css';
import '../../components/newsAndReviews/latestCars/LatestCars.css';
import '../../components/newsAndReviews/pagination/Pagination.css';


const NewsAndReviews = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;

 
  useEffect(() => {
    setTimeout(() => {
      const sortedNews = dummyNews.sort((a, b) => new Date(b.date) - new Date(a.date));
      setNews(sortedNews);
      setFilteredNews(sortedNews);
      setLoading(false);
    }, 1000);
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredNews(news);
    } else {
      const filtered = news.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNews(filtered);
    }
  };
  const groupedNews = currentNews.reduce((acc, article) => {
    const date = article.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(article);
    return acc;
  }, {});

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main'>
      <div className="news-and-reviews">
        <h1>Car news India - all latest car information and auto news India</h1>
      </div>
      <SearchBar placeholder="Select News Category" onSearch={handleSearch} />
      <div className="content-wrapper">
        <div className="date-group-column">
          {Object.keys(groupedNews).map(date => (
            <div key={date} className="date-group">
              <ul>
                {groupedNews[date].map((article, index) => (
                  <React.Fragment key={index}>
                    <li className="car-news-item">
                      <div className="card mb-3" >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={article.imageUrl} className="news-image" title={article.title} alt={article.title} />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h2 title={article.title}>{article.title}</h2>
                              <p>{article.description}</p>
                              <div className='authcard'>
                                <div className='authorThumbName'>{article.authername}</div>
                                <div className='authorsummary'>
                                  <div className='name'>{article.name} </div>
                                  <span className='datelist'>{article.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {(index + 1) % 3 === 0 && <CarRecomender />}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='gsc-col-xs-12'>
          <LatestCars/>
          <UpcomingCars />
          <SubscribeBanner />
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredNews.length / newsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
      <div className="content-wrapper">
        <div className='npsurvey' style={{ width: "900px", minHeight: "68px", marginBottom: "20px", background: "#fff", boxShadow: "0px 1px 3px rgba(36, 39, 44, .15)", display: "flex", alignItems: "center", padding: "16px 20px", justifyContent: "space-between", borderRadius: "16px" }}>
          <span style={{ fontWeight: "400", lineHeight: "16.5px", Color: "rgba(36, 39, 44, .7019607843)", flex: "1" }}>Did you find this information helpful?</span>
          <button className='btn' style={{ fontSize: "15px", minWidth: "65px", height: "35px", marginLeft: "20px", background: "#fff", fontWeight: "400", lineHeight: "18px", color: "#24272c", border: " 1px solid #e9e9e9", borderRadius: "6px", padding: "0 10px" }}>Yes</button>
          <button className='btn' style={{ fontSize: "15px", minWidth: "65px", height: "35px", marginLeft: "20px", background: "#fff", fontWeight: "400", lineHeight: "18px", color: "#24272c", border: " 1px solid #e9e9e9", borderRadius: "6px", padding: "0 10px" }}>No</button>
        </div>
      </div>
    </div>
  );
};

export default NewsAndReviews;
