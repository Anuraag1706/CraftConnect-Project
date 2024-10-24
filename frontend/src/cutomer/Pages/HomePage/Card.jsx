import { VStack ,Image,Text, Button} from '@chakra-ui/react'
// import React from 'react'
import PropTypes from 'prop-types';

const Card = ({amount,img,checkouthandler={checkouthandler}}) => {
  return (
   <VStack>
    <Image src={img} boxSize={"64"} objectFit={"cover"}/>
    <Text>₹{amount}</Text>
    <Button colorScheme='facebook' onClick={()=>checkouthandler(amount)} >Pay Now</Button>
   </VStack>
  )
}
Card.propTypes = {
  amount: PropTypes.number.isRequired,         // amount must be a number and required
  img: PropTypes.string.isRequired,            // img must be a string and required (URL to the image)
  checkouthandler: PropTypes.func.isRequired   // checkouthandler must be a function and required
};

// Default prop values (optional)
Card.defaultProps = {
  checkouthandler: () => {} // default empty function if no handler is provided
};

export default Card;