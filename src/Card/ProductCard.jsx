// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductCard = ({product}) => {
  return (
   <>
    <Card style={{ width: "22%", marginTop: "20px", justifyContent:"center", textAlign:"left", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
      <Card.Img variant="top" src={product.productImg} />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
          <p>PKR {product.prouctPrice}</p>
          <p>{product.productCategory}</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
   </>
  )
}

export default ProductCard;
