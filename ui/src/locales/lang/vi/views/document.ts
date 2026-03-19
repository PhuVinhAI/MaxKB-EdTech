export default {
  uploadDocument: 'Tải lên tài liệu',
  importDocument: 'Nhập tài liệu',
  syncDocument: 'Đồng bộ tài liệu',
  items: '',
  migrateDocument: 'Di chuyển sang',
  setting: {
    migration: 'Di chuyển',
    cancelGenerateQuestion: 'Hủy tạo câu hỏi',
    cancelVectorization: 'Hủy vector hóa',
    cancelGenerate: 'Hủy tạo',
    export: 'Xuất sang',
    download: 'Tải về',
    replace: 'Thay thế',
  },

  tip: {
    saveMessage: 'Các thay đổi hiện tại chưa được lưu. Xác nhận thoát?',
    cancelSuccess: 'Thành công',
    sendMessage: 'Thành công',
    vectorizationSuccess: 'Thành công',
    nameMessage: 'Tên tài liệu không được để trống!',
    importMessage: 'Thành công',
    migrationSuccess: 'Thành công',
    replaceSuccess: 'Thành công',
    fileLimitCountTip1: 'Tải lên tối đa mỗi lần',
    fileLimitCountTip2: 'tệp',
    fileLimitSizeTip1: 'mỗ tệp không được vượt quá',
    toImportDocConfirm:
      'Quy trình của cơ sở kiến thức hiện tại chưa được xuất bản, không thể nhập tài liệu. Vui lòng xuất bản quy trình trước.',
    fileLimitSizeTip2: 'dung lượng không được vượt quá',
  },
  upload: {
    selectFile: 'Chọn tệp',
    selectFiles: 'Chọn thư mục',
    uploadMessage: 'Kéo và thả tệp vào đây để tải lên hoặc',
    formats: 'Định dạng hỗ trợ:',
    requiredMessage: 'Vui lòng tải lên một tệp',
    errorMessage1: 'Dung lượng tệp vượt quá 100MB',
    errorMessage2: 'Định dạng tệp không được hỗ trợ',
    errorMessage3: 'Tệp không được để trống',
    errorMessage4: 'Có thể tải lên tối đa 50 tệp cùng lúc',
    template: 'Bản mẫu',
    download: 'Tải về',
  },

  fileType: {
    txt: {
      label: 'Tệp văn bản',
      tip1: '1. Khuyến nghị chuẩn hóa các dấu phân đoạn trong tệp trước khi tải lên.',
      tip2: '2. Có thể tải lên tối đa 50 tệp cùng lúc, mỗi tệp không quá 100MB.',
    },
    table: {
      label: 'Bảng biểu',
      tip1: '1. Bấm để tải về bản mẫu tương ứng và điền thông tin:',
      tip2: '2. Hàng đầu tiên phải là tiêu đề cột và tiêu đề cột phải là các thuật ngữ có ý nghĩa. Mỗi bản ghi trong bảng sẽ được coi là một đoạn.',
      tip3: '3. Mỗi trang tính (sheet) trong tệp bảng tính được tải lên sẽ được coi là một tài liệu, với tên trang tính là tên tài liệu.',
      tip4: '4. Có thể tải lên tối đa 50 tệp cùng lúc, mỗi tệp không quá 100MB.',
    },
    QA: {
      label: 'Cặp câu hỏi đáp (QA)',
      tip1: '1. Bấm để tải về bản mẫu tương ứng và điền thông tin:',
      tip2: '2. Mỗi trang tính (sheet) trong tệp bảng tính được tải lên sẽ được coi là một tài liệu, với tên trang tính là tên tài liệu.',
      tip3: '3. Có thể tải lên tối đa 50 tệp cùng lúc, mỗi tệp không quá 100MB.',
    },
  },
  setRules: {
    title: {
      setting: 'Thiết lập quy tắc phân đoạn',
      preview: 'Xem trước',
    },
    intelligent: {
      label: 'Phân đoạn tự động (Khuyến nghị)',
      text: 'Nếu bạn không chắc chắn cách thiết lập quy tắc phân đoạn, chúng tôi khuyên bạn nên sử dụng phân đoạn tự động.',
    },
    advanced: {
      label: 'Phân đoạn nâng cao',
      text: 'Người dùng có thể tùy chỉnh các dấu phân tách, độ dài đoạn và quy tắc làm sạch dựa trên tiêu chuẩn tài liệu.',
    },
    patterns: {
      label: 'Dấu phân tách đoạn',
      tooltip:
        'Chia nhỏ đệ quy theo các ký hiệu đã chọn theo thứ tự. Nếu kết quả chia vượt quá độ dài đoạn, nó sẽ bị cắt bớt cho vừa độ dài.',
      placeholder: 'Vui lòng chọn',
    },
    limit: {
      label: 'Độ dài đoạn',
    },
    with_filter: {
      label: 'Tự động làm sạch',
      text: 'Loại bỏ các ký hiệu thừa bị lặp lại, khoảng trắng, dòng trống và các ký tự tab.',
    },
    checkedConnect: {
      label: 'Thêm phần "Câu hỏi liên quan" cho các cặp QA khi nhập.',
    },
  },
  buttons: {
    import: 'Bắt đầu nhập',
    preview: 'Áp dụng',
    continueImporting: 'Tiếp tục nhập tài liệu',
  },
  tag: {
    label: 'Quản lý nhãn (Tag)',
    key: 'Nhãn',
    value: 'Giá trị',
    addTag: 'Thêm nhãn',
    noTag: 'Không có nhãn',
    relate: 'Liên kết',
    unrelate: 'Hủy liên kết',
    relatedDoc: 'Tài liệu đã liên kết',
    unrelatedDoc: 'Tài liệu chưa liên kết',
    setting: 'Cài đặt nhãn',
    create: 'Tạo nhãn',
    createValue: 'Tạo giá trị nhãn',
    edit: 'Sửa nhãn',
    editValue: 'Sửa giá trị nhãn',
    deleteConfirm: 'Xác nhận xóa nhãn: ',
    deleteTip:
      'Sau khi xóa, các tài nguyên đang sử dụng nhãn này sẽ bị gỡ bỏ nhãn. Vui lòng thận trọng!',
    requiredMessage1: 'Vui lòng nhập một nhãn',
    requiredMessage2: 'Vui lòng nhập một giá trị',
    requiredMessage3: 'Vui lòng nhập một nhãn hoặc giá trị',
  },
  table: {
    name: 'Tên tài liệu',
    char_length: 'Ký tự',
    paragraph: 'Đoạn',
    all: 'Tất cả',
    updateTime: 'Thời gian cập nhật',
  },
  fileStatus: {
    label: 'Trạng thái tệp',
    SUCCESS: 'Thành công',
    FAILURE: 'Thất bại',
    EMBEDDING: 'Đang lập chỉ mục',
    PENDING: 'Đang chờ',
    GENERATE: 'Đang tạo',
    SYNC: 'Đang đồng bộ',
    finish: 'Hoàn thành',
  },
  enableStatus: {
    label: 'Trạng thái',
    enable: 'Đã bật',
    close: 'Đã tắt',
  },
  sync: {
    label: 'Đồng bộ',
    confirmTitle: 'Xác nhận đồng bộ tài liệu?',
    confirmMessage1:
      'Việc đồng bộ sẽ xóa dữ liệu hiện có và lấy lại dữ liệu mới. Vui lòng thận trọng.',
    confirmMessage2: 'Không thể đồng bộ, vui lòng thiết lập URL tài liệu trước.',
    successMessage: 'Thành công',
  },
  delete: {
    confirmTitle1: 'Xác nhận xóa hàng loạt',
    confirmTitle2: 'tài liệu?',
    confirmMessage:
      'Các đoạn trong tài liệu đã chọn cũng sẽ bị xóa. Vui lòng thận trọng.',
    successMessage: 'Thành công',
    confirmTitle3: 'Xác nhận xóa tài liệu:',
    confirmMessage1: 'Dưới tài liệu này',
    confirmMessage2: 'Tất cả các đoạn sẽ bị xóa, vui lòng thực hiện thận trọng. ',
  },
  form: {
    source_url: {
      label: 'URL tài liệu',
      placeholder: 'Nhập URL tài liệu, mỗi địa chỉ một dòng. URL sai sẽ khiến quá trình nhập thất bại.',
      requiredMessage: 'Vui lòng nhập URL tài liệu',
    },
    selector: {
      label: 'Bộ chọn (Selector)',
      placeholder: 'Mặc định là body, bạn có thể nhập .classname/#idname/tagname',
    },
    hit_handling_method: {
      label: 'Truy xuất-Phản hồi',
      tooltip: 'Khi người dùng đặt câu hỏi, hãy xử lý các đoạn phù hợp theo phương pháp đã thiết lập.',
    },
    similarity: {
      label: 'Độ tương đồng cao hơn',
      placeholder: 'Trả về trực tiếp nội dung đoạn',
      requiredMessage: 'Vui lòng nhập giá trị độ tương đồng',
    },
    allow_download: {
      label: 'Cho phép tải xuống trong nguồn cơ sở kiến thức',
    },
  },
  hitHandlingMethod: {
    optimization: 'Tối ưu hóa mô hình',
    directly_return: 'Phản hồi trực tiếp',
  },
  movePosition: {
    title: 'Di chuyển vị trí',
    moveUp: 'Lên trên',
    moveDown: 'Xuống dưới',
    moveTop: 'Lên đầu',
    moveBottom: 'Xuống cuối',
  },
  generateQuestion: {
    title: 'Tạo câu hỏi',
    successMessage: 'Thành công',
    tip1: 'Biến {data} trong lời nhắc là trình giữ chỗ cho nội dung đoạn, sẽ được thay thế bằng nội dung đoạn thực tế khi thực thi và gửi đến mô hình AI;',
    tip2: 'Mô hình AI tạo ra các câu hỏi liên quan dựa trên nội dung đoạn. Vui lòng đặt các câu hỏi đã tạo trong thẻ',
    tip3: ', hệ thống sẽ tự động liên kết các câu hỏi trong thẻ này;',
    tip4: 'Hiệu quả tạo tùy thuộc vào mô hình và lời nhắc đã chọn. Người dùng có thể điều chỉnh để đạt hiệu quả tốt nhất.',
    prompt1:
      'Nội dung: {data}\n \n Hãy tóm tắt nội dung trên và tạo 5 câu hỏi dựa trên bản tóm tắt đó. \nYêu cầu trả lời: \n - Chỉ xuất ra các câu hỏi; \n - Vui lòng đặt mỗi câu hỏi trong thẻ',
    prompt2: '.',
  },
  feishu: {
    selectDocument: 'Chọn tài liệu',
    tip1: 'Chỉ hỗ trợ tài liệu và bảng biểu. Tài liệu sẽ được phân đoạn dựa trên tiêu đề và bảng biểu sẽ được chuyển đổi sang định dạng Markdown format trước khi phân đoạn.',
    tip2: 'Trước khi nhập tài liệu, chúng tôi khuyến nghị bạn nên chuẩn hóa các dấu phân đoạn tài liệu.',
  },
}
