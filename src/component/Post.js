import React ,{Component}from "react";
import User from "./User";
export default class Post extends Component{
    render() {
        return(
    <div className='post'>
    <User src='https://i.ytimg.com/vi/PDnFvgdruJ8/maxresdefault.jpg'
    alt='man'
    name='Scott'
    min
    />
    <img src={this.props.src} alt={this.props.alt}></img>
    <div className='post__name'>
        some account
    </div>
    <div className='post__descr'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda laborum non nulla quis. Aliquam atque quae repellat soluta voluptatibus?
    </div>
    </div>
        )
    }
}