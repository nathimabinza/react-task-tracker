import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {

    return <button 
    onClick={onClick} 
    style={{ backgroundColor: color }} 
    className='btn'>
        {text}
    </button>
}

Button.defaltProps ={
    color: 'steelblue',
}

Button.defaltProps ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button