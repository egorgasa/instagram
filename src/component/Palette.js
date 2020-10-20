import React, {Component} from "react";
import InstaService from  '../services/instaService'
import ErrorMessage from "./Error";

export default class Palette extends Component {
    InstaService = new InstaService();

    constructor(props) {
        super(props);
       this.state={
            error:false,
            photo:[]
        }
    }


    componentDidMount() {
        this.updatePhotos()

    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)

    }

    onError = () => {
        this.setState({
            error:true
        });
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error:false,
            photo:photos
        });

    }
renderItems(arr){
         console.log('photo',arr)

    return arr.map(item =>{
        const {src,alt}=item;
       return(<img src={src} alt={alt}></img>)
    })
}
    //
    // renderItems(arr) {
    //     return arr.map(item =>{
    //         const {src, alt} = item;
    //         return (
    //             <img src={src} alt={alt}/>
    //         )
    //
    //     })
    // }

        render(){
const {error,photo} = this.state;

        if(error) {
            return <ErrorMessage/>
        }

     const items = this.renderItems(photo);

        return(
    <div className='palette'>
        {items}
    </div>
            )
        }
    }