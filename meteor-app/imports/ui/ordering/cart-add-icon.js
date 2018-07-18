import React from 'react'
import { Icon, Button } from 'semantic-ui-react'

const CartAddIcon = (props) => (
    <div>
    <Button primary animated='vertical'>
      <Button.Content hidden>View Order</Button.Content>
      <Button.Content visible onClick={props.addToCart}>
        <Icon name='cart' size='big' />
        <Icon size='large'>{props.noOfParts}</Icon> 
      </Button.Content>
    </Button>
    </div>
  )
  
  export default CartAddIcon