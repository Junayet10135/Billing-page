import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Add A New Details!</h3>
                    <div class="modal-action">
                        <div className='card-body'>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Your Phone Number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("pNumber", {
                                            required: {
                                                value: true > 10,
                                                message: 'valid number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.pNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.pNumber.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Payment</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="amount"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("paid", {
                                            required: {
                                                value: true > 10,
                                                message: 'valid number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.paid?.type === 'required' && <span className="label-text-alt text-red-500">{errors.paid.message}</span>}
                                    </label>
                                </div>
                                <input className='btn w-full max-w-xs text-white' type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Modal;