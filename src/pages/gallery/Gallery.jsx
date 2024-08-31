import { galleryImages } from "../../assets/gallery"
import './gallery.scss';
export default function Gallery(){
    return(
        <div className="gallery">
            <div className="title">
                <h1>
                    Gallery
                </h1>
            </div>
            <div className="body">
                {
                    galleryImages.map((rec,i)=>{
                        return(
                            <div className="item" key={`item-${i}`}>
                                <div className="image">
                                    <img src={rec.img} alt="" />
                                </div>
                                <div className="location">
                                    <p>
                                        {rec.location}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}