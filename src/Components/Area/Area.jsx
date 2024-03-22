import React, { useMemo, useState } from 'react'
import PageHeader from '../Header/PageHeader';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addarea } from '../Apicalls/Area';
import Arealist from './Arealist';


function Area() {
  const [formData, setFormData] = useState('');
  const headerdata = useMemo(() => {
		return {
		  data:"Area",
		  page:"Add Area"
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
          const response = await addarea(data);
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
                      <label>Area Name</label>
                      <input
                      	{...register('name', { required: true, minLength: 2 })}
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        placeholder=""
                      />
                      {errors.name && errors.name.type === 'required' && (
						<span className="text-danger">Area is required</span>
						)}
						{errors.name && errors.name.type === 'minLength' && (
						<span className="text-danger">Area must be at least 2 characters</span>
						)}
                    </div>
                  </div>

                  
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="form-group local-forms">
                      <label>District</label>
                      <input
                      {...register('district', {
                        required: true,
                      })}
                      className={`form-control ${errors.district ? 'is-invalid' : ''}`}
                        type="number"
                        placeholder=""
                      />
                      {errors.phone && errors.district.type === 'required' && (
						<span className="text-danger">district  is required</span>
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
        <Arealist  formdata={formData} setformdata={setFormData}/>
      </div>
     
    </>
  )
}

export default Area