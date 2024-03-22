import React, { useMemo, useState } from 'react'
import PageHeader from '../Header/PageHeader';
import { useForm } from 'react-hook-form';
import Shoplist from './Shoplist';
import { addshop } from '../Apicalls/shop';
import { toast } from 'react-toastify';


function Shop() {
  const [formData, setFormData] = useState('');
  const headerdata = useMemo(() => {
		return {
		  data:"Shop",
		  page:"Add Shop"
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
          const response = await addshop(data);
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
                      <label>Shop Name</label>
                      <input
                      	{...register('name', { required: true, minLength: 2 })}
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder=""
                      />
                      {errors.name && errors.name.type === 'required' && (
													<span className="text-danger">Shop Name is required</span>
												)}
												{errors.name && errors.name.type === 'minLength' && (
													<span className="text-danger">Name must be at least 2 characters</span>
												)}
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>District</label>
                      <input
                      {...register('district', { required: true, minLength: 2 })}
                        type="text"
                        className={`form-control ${errors.district ? 'is-invalid' : ''}`}
                        placeholder=""
                      />
                       {errors.district && errors.district.type === 'required' && (
													<span className="text-danger">district is required</span>
												)}
												{errors.name && errors.name.type === 'minLength' && (
													<span className="text-danger">district Must be at least 2 characters</span>
												)}
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>Area</label>
                      <input
                         {...register('area', { required: true, minLength: 2 })}
                        type="text"
                        className={`form-control ${errors.area ? 'is-invalid' : ''}`}
                        placeholder=""
                      />
                       {errors.area && errors.area.type === 'required' && (
													<span className="text-danger">area is required</span>
												)}
												{errors.area && errors.area.type === 'minLength' && (
													<span className="text-danger">area Must be at least 2 characters</span>
												)}
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>Address</label>
                      <input
                         {...register('address', { required: true, minLength: 2 })}
                        type="text"
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        placeholder=""
                      />
                       {errors.address && errors.address.type === 'required' && (
													<span className="text-danger">address is required</span>
												)}
												{errors.address && errors.address.type === 'minLength' && (
													<span className="text-danger">address Must be at least 2 characters</span>
												)}
                    </div>
                  </div>
                 
                 
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>Pincode</label>
                      <input
                       	{ ...register('pincode', {
													required: 'Pincode is required',
													pattern: {
														value: /^\d{6}$/,
														message: 'Enter a valid pincode'
													}
													})}
                        type="text"
                        className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
                        placeholder=""
                      />
                       {errors.pincode && errors.pincode.type === 'required' && (
													<span className="text-danger">pincode code is required</span>
												)}
                    </div>
                  </div>
                  
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>phone number</label>
                      <input
                      {...register('phone', {
                        required: true,
                        pattern: /^[0-9]{0,10}$/,
                        message: 'Enter a valid phone number'
                      })}
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.phone && errors.phone.type === 'required' && (
													<span className="text-danger">phone number is required</span>
												)}
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
        <Shoplist  formdata={formData} setformdata={setFormData}/>
      </div>
     
    </>
  )
}

export default Shop