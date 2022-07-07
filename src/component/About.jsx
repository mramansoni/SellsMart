import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, facere. Est nisi sequi, omnis, cum magni nemo quae, itaque sit explicabo maxime laborum saepe. Necessitatibus quia nostrum animi placeat laboriosam sint repellendus in illo, aliquid deleniti architecto culpa. Iste quaerat omnis consequatur vero nesciunt culpa rerum, officia tempore! Quos, repudiandae. Labore itaque, voluptatum consequatur praesentium eum, illum tempore ullam excepturi cumque dolore doloremque natus, eaque facilis in! Iusto, quas cupiditate voluptatem, recusandae corporis, aperiam similique numquam neque magni fugit quidem. Perferendis, laudantium ex excepturi magni ab quo quisquam numquam illo earum nam sed ducimus nulla vel aut animi doloribus et eaque delectus tenetur architecto. Sequi placeat alias eveniet cupiditate? Esse, ab!
            </p>
            <NavLink to='/contact' className='btn btn-outline-primary'>Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="assets/aboutus.jpg" alt="aboutus" height="400px" width="400px" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About