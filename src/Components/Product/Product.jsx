import React, { useMemo, useState } from 'react'
import PageHeader from '../Header/PageHeader';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Productlist from './Productlist';
import { addproduct } from '../Apicalls/Product';


function Product() {
  const [formData, setFormData] = useState('');
  const headerdata = useMemo(() => {
		return {
		  data:"Products",
		  page:"Add Products"
		};
	  }, []);

    const {
		
      register,
      handleSubmit,
      formState: { errors },
      reset,
      } = useForm({
      criteriaMode: 'all',
      
      });
      const onSubmit =async(data)=>{
        try {
          const response = await addproduct(data);
          if (response.success) {
            setFormData(response.data);
            toast.success(response.message);
          }else {
            toast.error(response.message);
          }
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <>
       <PageHeader headerdata={headerdata} />
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Shop Details</h4>
                    </div>
                  </div>
                
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>Product Name</label>
                      <input
                      	{...register('name', { required: true, minLength: 2 })}
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder=""
                      />
                      {errors.name && errors.name.type === 'required' && (
						<span className="text-danger">Product Name is required</span>
						)}
						{errors.name && errors.name.type === 'minLength' && (
						<span className="text-danger">Product Name must be at least 2 characters</span>
						)}
                    </div>
                  </div>

                  
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>price</label>
                      <input
                      {...register('price', {
                        required: true,
                      })}
                      className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                        type="number"
                        placeholder=""
                      />
                      {errors.phone && errors.phone.type === 'required' && (
						<span className="text-danger">price  is required</span>
						)}
                    </div>
                  </div>  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>Stock</label>
                      <input
                      {...register('stock')}
                      className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
                        type="number"
                        placeholder=""
                      />
                      
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">
                        Submit
                      </button>
                      <button type="submit" className="btn btn-primary cancel-form">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Productlist  formdata={formData} setformdata={setFormData}/>
      </div>
     
    </>
  )
}

export default Product