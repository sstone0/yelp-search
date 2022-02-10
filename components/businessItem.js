import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const BusinessWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  width: calc(50% - 1rem);
  height: auto;
  margin: 0;
  line-height: 1.3em;
  border: none;
  box-shadow: 0px 3px 4px #e6e6e6;
  padding: 1rem 2rem;
  transition: 0.2s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    box-shadow: 0px 0px 5px 1px #e6e6e6;
  }

  &:hover {
    transform: translateY(-4px);
    cursor: pointer;
  }

  .address {
    padding: 0.5em 0;
  }

  .flex-apart {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    margin: 0em;
    margin-bottom: 15px;
    line-height: 1.3em;
    font-size: 1.3rem;
  }

  ul {
    list-style-type: none;
  }

  p {
    margin: 0em;
  }

  .image-container {
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin-right: 1rem;
    border-radius: 3px;

    @media (max-width: 768px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 550px) {
    width: calc(100% - 1rem);
  }
`;

const BusinessCardInfo = styled.div`
  padding: 1rem 0;
  flex: 3;

  .starIcon {
    margin-right: 0.3em;
  }
`;

const BusinessItem = ({ business }) => {
  return (
    <BusinessWrapper>
      <div className='image-container'>
        <img src={business.image} />
      </div>
      <BusinessCardInfo>
        <h1>{business.name}</h1>
        <div className='bussinessInfo'>
          <div className='address'>
            <ul>
              <li>
                <p>{business.address}</p>
              </li>
              <li>
                <p>{business.city}</p>
              </li>
              <li>
                <p>{business.zipCode}</p>
              </li>
            </ul>
          </div>
          <div className='flex-apart'>
            <span>Rating:</span>
            <p>
              <FaStar className='starIcon' />
              {business.rating}
            </p>
          </div>
          <div className='flex-apart'>
            <span>Reviews:</span>
            <p>{business.reviewCount}</p>
          </div>
        </div>
      </BusinessCardInfo>
    </BusinessWrapper>
  );
};

export default BusinessItem;
