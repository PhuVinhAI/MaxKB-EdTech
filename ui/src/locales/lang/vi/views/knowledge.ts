export default {
  title: 'Kiến thức',
  relatedApplications: 'Agent liên kết',
  document_count: 'tài liệu',
  relatedApp_count: 'agent liên kết',
  setting: {
    vectorization: 'Vector hóa',
    sync: 'Đồng bộ',
  },
  tip: {
    professionalMessage:
      'Phiên bản cộng đồng hỗ trợ tối đa 50 kiến thức. Để có thêm kiến thức, vui lòng nâng cấp lên phiên bản chuyên nghiệp.',
    syncSuccess: 'Nhiệm vụ đồng bộ đã được gửi thành công',
    updateModeMessage:
      'Sau khi sửa đổi mô hình vector kiến thức, bạn cần thực hiện vector hóa lại kiến thức. Bạn có muốn tiếp tục lưu không?',
  },
  delete: {
    confirmTitle: 'Xác nhận xóa kiến thức:',
    confirmMessage1: 'Kiến thức này có liên quan đến',
    confirmMessage2: 'agent. Việc xóa sẽ không thể hoàn tác, vui lòng thận trọng.',
    resourceCountMessage:
      'Kiến thức này liên kết với {count} tài nguyên và sẽ không khả dụng sau khi xóa. Vui lòng thận trọng.',
  },
  knowledgeType: {
    label: 'Loại',
    generalKnowledge: 'Kiến thức chung',
    webKnowledge: 'Kiến thức Web',
    larkKnowledge: 'Kiến thức Lark',
    workflowKnowledge: 'Kiến thức quy trình (Workflow)',
    yuqueKnowledge: 'Kiến thức Yuque',
    generalInfo: 'Tải lên tài liệu cục bộ',
    webInfo: 'Đồng bộ dữ liệu văn bản từ một trang web',
    larkInfo: 'Xây dựng kiến thức thông qua tài liệu Lark',
    yuqueInfo: 'Xây dựng kiến thức thông qua tài liệu Yuque',
    createGeneralKnowledge: 'Tạo kiến thức chung',
    createWebKnowledge: 'Tạo kiến thức Web',
    createLarkKnowledge: 'Tạo kiến thức Lark',
    createYuqueKnowledge: 'Tạo kiến thức Yuque',
    createWorkflowKnowledge: 'Tạo kiến thức quy trình',
    workflowInfo: 'Xây dựng cơ sở kiến thức thông qua các phương pháp quy trình tùy chỉnh',
  },
  form: {
    knowledgeName: {
      label: 'Tên',
      placeholder: 'Vui lòng nhập tên kiến thức',
      requiredMessage: 'Vui lòng nhập tên kiến thức',
    },
    knowledgeDescription: {
      label: 'Mô tả',
      placeholder:
        'Mô tả nội dung của kiến thức. Mô tả chi tiết sẽ giúp AI hiểu nội dung tốt hơn, cải thiện độ chính xác của việc truy xuất nội dung và tỷ lệ khớp.',
      requiredMessage: 'Vui lòng nhập mô tả kiến thức',
    },
    EmbeddingModel: {
      label: 'Mô hình Embedding',
      placeholder: 'Vui lòng chọn một mô hình embedding',
      requiredMessage: 'Vui lòng chọn mô hình embedding',
    },

    source_url: {
      label: 'URL gốc của Web',
      placeholder: 'Vui lòng nhập URL gốc của trang web',
      requiredMessage: 'Vui lòng nhập URL gốc của trang web',
    },
    selector: {
      label: 'Bộ chọn (Selector)',
      placeholder: 'Mặc định là body, có thể nhập .classname/#idname/tagname',
    },
    file_count_limit: {
      label: 'Số lượng tệp tối đa tải lên cùng lúc',
    },
    file_size_limit: {
      label: 'Dung lượng tối đa của mỗi tài liệu (MB)',
      placeholder: 'Đề xuất dựa trên cấu hình máy chủ, nếu không có thể gây dừng dịch vụ',
    },
    appTemplate: {
      blank: {
        title: 'Tạo trống',
      },
      basic: {
        title: 'Biểu mẫu cơ bản',
        description:
          'Hỗ trợ các biểu mẫu quy trình cơ bản cho tệp cục bộ, tài liệu Lark và nguồn dữ liệu trang web',
      },
    },
  },

  ResultSuccess: {
    title: 'Đã tạo kiến thức thành công',
    paragraph: 'Đoạn văn',
    paragraph_count: 'đoạn',
    documentList: 'Danh sách tài liệu',
    loading: 'Đang nhập',
    buttons: {
      toKnowledge: 'Đến danh sách kiến thức',
      toDocument: 'Đi tới tài liệu',
    },
  },
  syncWeb: {
    title: 'Đồng bộ kiến thức',
    syncMethod: 'Phương thức đồng bộ',
    replace: 'Đồng bộ thay thế',
    replaceText: 'Lấy lại các tài liệu trang web, thay thế các tài liệu trong kiến thức cục bộ',
    complete: 'Đồng bộ đầy đủ',
    completeText: 'Xóa tất cả tài liệu trong kiến thức cục bộ và lấy lại các tài liệu trang web',
    tip: 'Lưu ý: Tất cả các lần đồng bộ sẽ xóa dữ liệu hiện có và lấy lại dữ liệu mới. Vui lòng thận trọng.',
  },
  transform: {
    button: 'Chuyển đổi',
    title: 'Chuyển đổi thành cơ sở kiến thức quy trình',
    message1:
      "Giờ đây, bạn có thể chuyển đổi cơ sở kiến thức hiện có của mình thành cơ sở kiến thức quy trình—một loại linh hoạt và mở hơn, cho phép bạn tự chủ sắp xếp toàn bộ quy trình từ các nguồn dữ liệu khác nhau đến việc ghi vào cơ sở kiến thức thông qua các thao tác nút kéo thả, đáp ứng nhu cầu quản lý kiến thức cá nhân hóa của doanh nghiệp. Bạn có thể sử dụng các nguồn dữ liệu và công cụ có sẵn trong bộ công cụ của chúng tôi.",
    message2: 'Phương pháp xử lý mới sẽ được áp dụng cho tất cả các tài liệu được nhập sau đó.',
    tip: 'Lưu ý: Không thể hoàn tác việc chuyển đổi.',
    confirm:
      'Bạn có chắc chắn muốn chuyển đổi sang cơ sở kiến thức quy trình không? Hành động này không thể hoàn tác. Vui lòng thận trọng.',
  },
}
