import InputField from '../InputField';
import { Button } from 'react-bootstrap';

interface FormProps {
  title: string;
  description: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  onSubmit: () => void;
  buttonText: string;
}

const Form: React.FC<FormProps> = ({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  buttonText
}) => {
  return (
    <div>
      <InputField 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        className="form-control my-2" 
      />
      <InputField 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        className="form-control my-2" 
      />
      <Button onClick={onSubmit} variant="primary">
        {buttonText}
      </Button>
    </div>
  );
};

export default Form;
