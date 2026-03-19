export default {
  input_type_list: {
    TextInput: 'Nhập văn bản',
    PasswordInput: 'Mật khẩu',
    Slider: 'Thanh trượt',
    SwitchInput: 'Công tắc',
    SingleSelect: 'Chọn một',
    MultiSelect: 'Chọn nhiều',
    DatePicker: 'Chọn ngày',
    JsonInput: 'JSON',
    RadioCard: 'Thẻ lựa chọn (Radio Card)',
    RadioRow: 'Hàng lựa chọn (Radio Row)',
    UploadInput: 'Tải tệp lên',
    TextareaInput: 'Nhập nhiều dòng',
    MultiRow: 'Nhiều hàng',
  },
  default: {
    label: 'Mặc định',
    placeholder: 'Vui lòng nhập giá trị mặc định',
    requiredMessage: ' là thuộc tính bắt buộc',
    show: 'Hiển thị mặc định',
  },
  tip: {
    requiredMessage: 'không được để trống',
    jsonMessage: 'Định dạng JSON không chính xác',
  },
  paramForm: {
    field: {
      label: 'Tham số',
      placeholder: 'Vui lòng nhập tham số',
      requiredMessage: 'Tham số là thuộc tính bắt buộc',
      requiredMessage2: 'Chỉ cho phép chữ cái, số và dấu gạch dưới',
    },
    name: {
      label: 'Tên',
      placeholder: 'Vui lòng nhập tên',
      requiredMessage: 'Tên là thuộc tính bắt buộc',
    },
    tooltip: {
      label: 'Chú giải (Tooltip)',
      placeholder: 'Vui lòng nhập chú giải',
    },
    required: {
      label: 'Bắt buộc',
      requiredMessage: 'Bắt buộc là thuộc tính bắt buộc',
    },
    input_type: {
      label: 'Loại',
      placeholder: 'Vui lòng chọn một loại',
      requiredMessage: 'Loại là thuộc tính bắt buộc',
    },
  },
  DatePicker: {
    placeholder: 'Chọn ngày',
    year: 'Năm',
    month: 'Tháng',
    date: 'Ngày',
    datetime: 'Ngày giờ',
    dataType: {
      label: 'Loại dữ liệu ngày',
      placeholder: 'Vui lòng chọn loại dữ liệu ngày',
    },
    format: {
      label: 'Định dạng',
      placeholder: 'Vui lòng chọn định dạng',
    },
  },
  Select: {
    label: 'Giá trị tùy chọn',
    placeholder: 'Vui lòng nhập giá trị tùy chọn',
  },
  tag: {
    label: 'Thẻ (Tag)',
    placeholder: 'Vui lòng nhập nhãn tùy chọn',
  },
  Slider: {
    showInput: {
      label: 'Hiển thị ô nhập liệu',
    },
    valueRange: {
      label: 'Phạm vi giá trị',
      minRequired: 'Yêu cầu giá trị nhỏ nhất',
      maxRequired: 'Yêu cầu giá trị lớn nhất',
    },
    step: {
      label: 'Bước nhảy',
      requiredMessage1: 'Yêu cầu giá trị bước nhảy',
      requiredMessage2: 'Bước nhảy không thể bằng 0',
    },
  },
  TextInput: {
    length: {
      label: 'Độ dài văn bản',
      minRequired: 'Yêu cầu độ dài tối thiểu',
      maxRequired: 'Yêu cầu độ dài tối đa',
      requiredMessage1: 'Độ dài phải nằm trong khoảng',
      requiredMessage2: 'và',
      requiredMessage3: 'ký tự',
      requiredMessage4: 'Độ dài văn bản là tham số bắt buộc',
    },
  },
  UploadInput: {
    limit: {
      label: 'Số lượng tệp tối đa mỗi lần tải lên',
      required: 'Yêu cầu số lượng tệp tối đa',
    },
    max_file_size: {
      label: 'Dung lượng tệp tối đa (MB)',
      required: 'Yêu cầu dung lượng tệp tối đa',
    },
    accept: {
      label: 'Loại tệp',
      required: 'Yêu cầu loại tệp',
    },
  },
  AssignmentMethod: {
    label: 'Phương thức gán giá trị',
    ref_variables: {
      label: 'Tham chiếu biến',
      popover: 'Giá trị biến phải tuân theo',
      json_format: 'định dạng JSON',
      popover_label: 'Nhãn',
      popover_value: 'Giá trị',
      popover_default: 'Mặc định',
    },
  },
}
