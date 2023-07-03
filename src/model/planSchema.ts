/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
import mongoose, { Document, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";
import {IPlan} from "../Types/interface.js"

interface PlanDocument extends IPlan, Document {}

const planSchema = new Schema<PlanDocument>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    number_of_expiration_day: {
        type: Number,
        required: true
    },
    number_of_chamber: {
        type: Number,
        required: true
    },
    maximum_image: {
        type: Number,
        required: true
    },
    online_consulting:{
        type:String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    daily_max_appointment: {
        type: Number,
        required: true
    },
    number_of_staff: {
        type: Number,
        required: true
    },
    max_video: {
        type: Number,
        required: true
    },
    message_system_with_patient: {
        type: String,
        required: true
    }, 
    status: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
    }
});

planSchema.plugin(paginate);
const planmodel = mongoose.model<PlanDocument, mongoose.PaginateModel<PlanDocument>>('plan', planSchema);
export default planmodel;