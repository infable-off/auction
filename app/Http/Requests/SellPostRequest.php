<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SellPostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:2|max:40',
            'model' =>'required|min:2|max:40',
            'engine'=> 'required|min:2|max:40',
            'vin' => 'required|min:2|max:40',
            'price' =>'required|min:2|max:40',
            'image' =>'required|min:2|max:300',
            'user_id' =>'required',
        ];
    }
}
