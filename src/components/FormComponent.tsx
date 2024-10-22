import {PostModel} from "../model/PostModel";
import {useForm} from "react-hook-form";
import {PostPosts} from "../service/Posts.service";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


const FormComponent = () =>{
    const {handleSubmit, register,reset, formState: { errors }} = useForm<PostModel>();
    const customHandler = (dataForm: PostModel) =>{
        PostPosts(dataForm)
            .then(response =>{
                console.log('Post created:', response.data);
                reset();
            })
    };

    return(
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div>
                    <input type="number" placeholder="userId" {...register("userId", {
                        required: true,
                        minLength: {value: 1, message: "User Id must be at least 1 characters long"},
                        maxLength: {value: 10, message: "User Id cannot exceed 10 characters"}
                    })} />
                    {errors.userId && <span>{errors.userId.message}</span>}
                </div>
                <div><input type="text" placeholder="title" {...register("title", {
                    required: true,
                    minLength: {value: 5, message: "Title must be at least 5 characters long"},
                    maxLength: {value: 12, message: "Title cannot exceed 12 characters"}
                })} />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div><input type="text" placeholder="body" {...register("body", {
                    required: true,
                    minLength: {value: 15, message: "Body must be at least 15 characters long"},
                    maxLength: {value: 200, message: "Body cannot exceed 200 characters"}
                })} />
                    {errors.body && <span>{errors.body.message}</span>}
                </div>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;

