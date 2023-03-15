import './Productcard.css';

const Productcard = (props) => {
  return (
    <div className='Productcard'>
      <div className="img-cont"></div>

      <div className="id-cont">
        <div className="texts-cont">
          <p className="prodname">{props.name}</p> {/*catch the name to database */}
          <p className="price">Rp. 00.000</p> {/* use props */}
        </div>
        <p className='plusbutton'>+</p>
      </div>
    </div>
  );
}

export default Productcard;