import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/appStore";
import MaxWidthSection from "./Layout/MaxWidthSection";
import styled from "styled-components";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const SearchBarWrapper = styled(MaxWidthSection)`
  position: relative;
  padding: 2rem;
  max-height: 500px;

  .object-cover {
    object-fit: cover;
  }

  div {
    z-index: 2;
  }
  button {
    z-index: 2;
  }

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const SortByOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;

  ul {
    list-style: none;
    display: flex;

    li {
      padding: 0.5rem;
    }
    .sortby_option {
      &:hover {
        color: #f0c36c;
        cursor: pointer;
      }
    }

    .active {
      color: #f0c36c;
      border-bottom: 1px solid #f0c36c;
    }
  }
`;

const Button = styled.button`
  margin: 0 auto;
  width: 60px;
  padding: 10px;
  background: #c41200;
  border: none;
  border-radius: 3px;
  color: white;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: calc(50% - 5px);
    padding: 10px;
    border: none;
    border-radius: 3px;

    &:focus,
    &:focus-visible {
      outline: none;
    }

    @media (max-width: 640px) {
      width: 100%;
      margin: 0 0 1rem 0;
    }
  }
  @media (max-width: 640px) {
    font-size: 20px;
    flex-direction: column;
  }
`;

export default function SearchBar() {
  const {
    term,
    location,
    searchYelp,
    sortBy,
    clearBusinesses,
    setTermParameters,
  } = useContext(AppContext);

  const [state, setState] = useState({
    term: term,
    location: location,
    sortBy: sortBy,
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
    Distance: "distance",
  };

  const handleSortbyChange = (sortByOptionValue) => {
    setState({ ...state, sortBy: sortByOptionValue });
  };

  const handleSearch = (e) => {
    console.log(state);
    e.preventDefault();
    clearBusinesses();
    setTermParameters({
      term: state.term,
      location: state.location,
      sortBy: state.sortBy,
    });
    searchYelp(state.term, state.location, state.sortBy);
  };

  const enterPress = (e) => {
    if (e.keyCode === 13) {
      handleSearch(e);
    }
  };

  useEffect(() => {
    setState({ ...state, term: term });
  }, [term]);

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={`sortby_option ${
            sortByOptionValue === state.sortBy ? "active" : ""
          }`}
          onClick={handleSortbyChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <SearchBarWrapper>
      <Image
        layout='fill'
        className='object-center object-cover'
        src='/banner_background.jpg'
        alt='title'
      />
      <SortByOptionsWrapper>
        <ul>{renderSortByOptions()}</ul>
      </SortByOptionsWrapper>
      <InputWrapper>
        <input
          className='term'
          name='term'
          placeholder='Search Terms'
          onChange={handleInputChange}
          value={state.term}
          onKeyUp={enterPress}></input>
        <input
          className='location'
          name='location'
          placeholder='Location'
          onChange={handleInputChange}
          onKeyUp={enterPress}></input>
      </InputWrapper>
      <Button onClick={handleSearch}>
        <FaSearch />
      </Button>
    </SearchBarWrapper>
  );
}
