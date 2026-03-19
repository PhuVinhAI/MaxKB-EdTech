export default {
  node: 'Nút',
  nodeName: 'Tên nút',
  baseComponent: 'Cơ bản',
  nodeSetting: 'Cài đặt nút',
  workflow: 'Quy trình làm việc (Workflow)',
  knowledgeWorkflow: 'Quy trình kiến thức',
  info: {
    previewVersion: 'Phiên bản xem trước:',
    saveTime: 'Lần lưu cuối:',
  },
  operation: {
    toImportDoc: 'Đi tới nhập tài liệu',
    importWorkflow: 'Nhập quy trình',
    exportWorkflow: 'Xuất quy trình',
  },
  setting: {
    restoreVersion: 'Khôi phục phiên bản trước',
    restoreCurrentVersion: 'Khôi phục về phiên bản này',
    addComponent: 'Thêm',
    releaseHistory: 'Lịch sử phát hành',
    autoSave: 'Tự động lưu',
    latestRelease: 'Bản phát hành mới nhất',
    copyParam: 'Sao chép tham số',
    debug: 'Chạy',
    exit: 'Thoát',
    exitSave: 'Lưu & Thoát',
    templateCenter: 'Trung tâm biểu mẫu',
  },
  tip: {
    noData: 'Không tìm thấy kết quả liên quan',
    nameMessage: 'Tên không được để trống!',
    onlyRight: 'Chỉ có thể kết nối từ điểm neo bên phải',
    notRecyclable: 'Không cho phép kết nối vòng lặp',
    onlyLeft: 'Chỉ có thể kết nối đến điểm neo bên trái',
    applicationNodeError: 'Agent này hiện không khả dụng',
    toolNodeError: 'Nút công cụ này không khả dụng',
    repeatedNodeError: 'Nút với tên này đã tồn tại',
    cannotCopy: 'Không thể sao chép',
    copyError: 'Nút đã được sao chép',
    paramErrorMessage: 'Tham số đã tồn tại: ',
    saveMessage: 'Các thay đổi hiện tại chưa được lưu. Lưu trước khi thoát?',
    searchPlaceholder: 'Vui lòng nhập tên nút',
  },
  delete: {
    confirmTitle: 'Xác nhận xóa nút này?',
    deleteMessage: 'Không thể xóa nút này',
  },
  control: {
    zoomOut: 'Thu nhỏ',
    zoomIn: 'Phóng to',
    fitView: 'Vừa màn hình',
    retract: 'Thu gọn tất cả',
    extend: 'Mở rộng tất cả',
    beautify: 'Tự động sắp xếp',
  },
  variable: {
    global: 'Biến toàn cục',
    chat: 'Biến trò chuyện',
    Referencing: 'Biến tham chiếu',
    ReferencingRequired: 'Yêu cầu biến tham chiếu',
    ReferencingError: 'Biến tham chiếu không hợp lệ',
    NoReferencing: 'Biến tham chiếu không tồn tại',
    placeholder: 'Vui lòng chọn một biến',
    inputPlaceholder: 'Vui lòng nhập biến',
    loop: 'Biến vòng lặp',
  },
  condition: {
    title: 'Điều kiện thực thi',
    front: 'Tiền điều kiện',
    AND: 'Tất cả',
    OR: 'Bất kỳ',
    text: 'Sau khi nút được kết nối thực thi xong, thực thi nút hiện tại',
  },
  validate: {
    startNodeRequired: 'Yêu cầu nút Bắt đầu',
    startNodeOnly: 'Chỉ được phép có một nút Bắt đầu',
    baseNodeRequired: 'Yêu cầu nút Thông tin cơ bản',
    baseNodeOnly: 'Chỉ được phép có một nút Thông tin cơ bản',
    notInWorkFlowNode: 'Nút không nằm trong quy trình',
    noNextNode: 'Nút tiếp theo không tồn tại',
    nodeUnavailable: 'Nút không khả dụng',
    needConnect1: 'Nhánh của nút cần được kết nối',
    cannotEndNode: 'Nút này không thể dùng làm nút kết thúc',
    loopNodeBreakNodeRequired: 'Vòng lặp vô hạn phải có nút Break',
  },
  nodes: {
    knowledgeWriteNode: {
      label: 'Ghi kiến thức',
      text: 'Ghi danh sách đoạn văn đầu vào vào kiến thức hiện tại và hoàn thành quá trình vector hóa',
    },
    dataSourceWebNode: {
      label: 'Trang Web',
      text: 'Nhập URL gốc để tự động thu thập dữ liệu web (mỗi liên kết tương ứng với một tài liệu), xuất ra danh sách tài liệu có nội dung',
      field_label: 'Danh sách tài liệu',
    },
    dataSourceLocalNode: {
      label: 'Tệp cục bộ',
      text: 'Tải lên tài liệu cục bộ, xuất ra danh sách tài liệu (nội dung chưa được phân tích, cần sử dụng với nút "Trích xuất nội dung tài liệu")',
      fileList: 'Danh sách tệp',
      fileFormat: {
        label: 'Định dạng tệp hỗ trợ',
        requiredMessage: 'Vui lòng chọn định dạng tệp',
      },
      maxFileNumber: {
        label: 'Số lượng tệp tối đa mỗi lần tải lên',
      },
      maxFileCountNumber: {
        label: 'Dung lượng tối đa mỗi tệp (MB)',
      },
    },
    classify: {
      aiCapability: 'Khả năng AI',
      businessLogic: 'Logic nghiệp vụ',
      other: 'Khác',
      dataProcessing: 'Xử lý dữ liệu',
    },
    startNode: {
      label: 'Bắt đầu',
      question: 'Câu hỏi người dùng',
      currentTime: 'Thời gian hiện tại',
    },
    baseNode: {
      fileUpload: {
        label: 'Tải tệp lên',
        tooltip: 'Khi được bật, trang Hỏi & Đáp sẽ hiển thị nút tải tệp lên.',
      },
      FileUploadSetting: {
        title: 'Cài đặt tải tệp lên',
        maxFiles: 'Số lượng tệp tối đa mỗi lần tải lên',
        fileLimit: 'Dung lượng tối đa mỗi tệp (MB)',
        fileUploadType: {
          label: 'Các loại tệp được phép tải lên',
          documentText: 'Yêu cầu nút "Trích xuất nội dung tài liệu" để phân tích nội dung tài liệu',
          imageText: 'Yêu cầu nút "Hiểu hình ảnh" để phân tích nội dung hình ảnh',
          videoText: 'Yêu cầu nút "Hiểu video" để phân tích nội dung video',
          audioText: 'Yêu cầu nút "Chuyển giọng nói thành văn bản" để phân tích nội dung âm thanh',
          uploadMethod: 'Phương thức tải lên',
        },
      },
    },
    KnowledgeBaseNode: {
      DocumentSetting: 'Cài đặt xử lý tài liệu',
    },
    aiChatNode: {
      label: 'AI Chat',
      text: 'Trò chuyện với mô hình AI',
      answer: 'Nội dung AI',
      returnContent: {
        label: 'Trả về nội dung',
        tooltip: `Nếu tắt, nội dung của nút này sẽ không được xuất cho người dùng.
                  Nếu bạn muốn người dùng thấy kết quả của nút này, vui lòng bật công tắc.`,
      },
      defaultPrompt: 'Thông tin đã biết',
      think: 'Quá trình suy nghĩ',
      historyMessage: 'Lịch sử trò chuyện',
    },
    searchKnowledgeNode: {
      label: 'Truy xuất kiến thức',
      text: 'Cho phép bạn truy vấn nội dung văn bản liên quan đến câu hỏi người dùng từ Kiến thức',
      paragraph_list: 'Danh sách các đoạn đã truy xuất',
      is_hit_handling_method_list: 'Danh sách các đoạn đáp ứng tiêu chí phản hồi trực tiếp',
      result: 'Kết quả tìm kiếm',
      directly_return: 'Nội dung các đoạn đáp ứng tiêu chí phản hồi trực tiếp',
      searchParam: 'Tham số truy xuất',
      showKnowledge: {
        label: 'Kết quả được hiển thị trong nguồn kiến thức',
        requiredMessage: 'Vui lòng thiết lập tham số',
      },
      searchQuestion: {
        label: 'Câu hỏi',
        placeholder: 'Vui lòng chọn một câu hỏi tìm kiếm',
        requiredMessage: 'Vui lòng chọn một câu hỏi tìm kiếm',
      },
    },
    searchDocumentNode: {
      label: 'Truy xuất nhãn tài liệu',
      text: 'Tìm kiếm các tài liệu đáp ứng điều kiện dựa trên nhãn tài liệu trong phạm vi tìm kiếm được chỉ định',
      selectKnowledge: 'Phạm vi tìm kiếm',
      searchSetting: 'Cài đặt tìm kiếm',
      custom: 'Thủ công',
      customTooltip: 'Thiết lập thủ công các điều kiện lọc nhãn',
      auto: 'Tự động',
      autoTooltip: 'Tự động lọc các điều kiện nhãn dựa trên câu hỏi tìm kiếm',
      documentList: 'Danh sách tài liệu',
      knowledgeList: 'Danh sách kiến thức',
      result: 'Kết quả tìm kiếm',
      searchParam: 'Tham số tìm kiếm',
      select_variable: 'Chọn biến',
      valueMessage: `Giá trị hoặc tên `,

      searchQuestion: {
        label: 'Câu hỏi tìm kiếm',
        placeholder: 'Vui lòng chọn một câu hỏi tìm kiếm',
        requiredMessage: 'Vui lòng chọn một câu hỏi tìm kiếm',
      },
    },
    questionNode: {
      label: 'Tối ưu hóa câu hỏi',
      text: 'Tối ưu hóa và cải thiện câu hỏi hiện tại dựa trên lịch sử trò chuyện để khớp tốt hơn với các đoạn kiến thức',
      result: 'Kết quả câu hỏi đã tối ưu',
      systemDefault: `#Vai trò
Bạn là một chuyên gia tối ưu hóa vấn đề, thành thạo trong việc suy luận chính xác ý định của người dùng dựa trên ngữ cảnh và tối ưu hóa các câu hỏi do người dùng đặt ra.

##Kỹ năng
###Kỹ năng 1: Tối ưu hóa vấn đề
2. Nhận câu hỏi đầu vào của người dùng.
3. Phân tích kỹ ý nghĩa của vấn đề dựa trên ngữ cảnh.
4. Xuất ra các vấn đề đã được tối ưu hóa.

##Hạn chế:
-Chỉ trả về vấn đề đã được tối ưu hóa mà không có bất kỳ giải thích hoặc làm rõ bổ sung nào.
-Đảm bảo rằng vấn đề đã được tối ưu hóa phản ánh chính xác ý định ban đầu và không làm thay đổi ý nghĩa gốc.`,
    },
    conditionNode: {
      label: 'Nhánh điều kiện',
      text: 'Kích hoạt các nút khác nhau dựa trên điều kiện',
      branch_name: 'Tên nhánh',
      conditions: {
        label: 'Điều kiện',
        info: 'Đáp ứng các điều kiện sau',
        requiredMessage: 'Vui lòng chọn điều kiện',
      },
      valueMessage: 'Vui lòng nhập một giá trị',
      addCondition: 'Thêm điều kiện',
      addBranch: 'Thêm nhánh',
    },
    replyNode: {
      label: 'Phản hồi chỉ định',
      text: 'Chỉ định nội dung phản hồi, các biến tham chiếu sẽ được chuyển đổi thành chuỗi để xuất ra',
      replyContent: 'Nội dung phản hồi',
    },
    rerankerNode: {
      label: 'Xếp hạng lại (Reranker)',
      text: 'Sử dụng mô hình xếp hạng lại để tinh lọc kết quả truy xuất từ nhiều nguồn kiến thức',
      result_list: 'Danh sách kết quả đã xếp hạng lại',
      result: 'Kết quả xếp hạng lại',
      rerankerContent: {
        label: 'Nội dung xếp hạng lại',
        requiredMessage: 'Vui lòng chọn nội dung xếp hạng lại',
      },
      higher: 'Cao hơn',
      ScoreTooltip: 'Điểm (Score) càng cao, mức độ liên quan càng mạnh.',
      max_paragraph_char_number: 'Số ký tự tối đa',
      reranker_model: {
        label: 'Rerank',
        placeholder: 'Vui lòng chọn một mô hình rerank',
      },
    },
    formNode: {
      label: 'Nhập biểu mẫu',
      text: 'Thu thập đầu vào của người dùng trong quá trình Hỏi & Đáp và sử dụng trong các quy trình tiếp theo',
      form_content_format1: 'Xin chào, vui lòng điền vào biểu mẫu bên dưới:',
      form_content_format2: 'Bấm nút [Gửi] sau khi điền xong.',
      form_data: 'Tất cả nội dung biểu mẫu',
      formContent: {
        label: 'Nội dung xuất biểu mẫu',
        requiredMessage:
          'Vui lòng thiết lập nội dung xuất của nút này, { form } là trình giữ chỗ cho biểu mẫu.',
        tooltip: 'Xác định nội dung xuất của nút này. { form } là trình giữ chỗ cho biểu mẫu',
      },
      formAllContent: 'Tất cả nội dung biểu mẫu',
      formSetting: 'Cấu hình biểu mẫu',
    },
    documentExtractNode: {
      label: 'Trích xuất nội dung tài liệu',
      text: 'Phân tích tài liệu đầu vào để xuất ra nội dung tài liệu có cấu trúc',
      content: 'Nội dung tài liệu',
    },
    documentSplitNode: {
      label: 'Phân đoạn tài liệu',
      text: 'Chia nhỏ nội dung tài liệu đầu vào theo chiến lược phân đoạn, xuất ra danh sách các đoạn văn bản',
      paragraphList: 'Danh sách các đoạn đã chia',
      splitStrategy: {
        label: 'Chiến lược phân đoạn',
        placeholder: 'Vui lòng chọn một chiến lược phân đoạn',
        requiredMessage: 'Vui lòng chọn một chiến lược phân đoạn',
      },
      chunk_length: {
        label: 'Độ dài đoạn (Chunk length)',
        tooltip1: 'Mục tiêu cốt lõi là cân bằng giữa độ chính xác truy xuất và hiệu quả gợi nhớ',
        tooltip2:
          'Tránh phân đoạn quá ngắn: Một đoạn <50 ký tự có thể dẫn đến phân mảnh ngữ nghĩa, có khả năng không khớp với ý định truy vấn do thiếu ngữ cảnh.',
        tooltip3:
          'Tránh phân đoạn quá dài: Một khối vượt quá 500 ký tự sẽ làm tăng thông tin dư thừa, giảm độ chính xác truy xuất và tiêu tốn nhiều tài nguyên lưu trữ, tính toán hơn.',
      },
      title1: 'Tiêu đề đoạn được đặt làm câu hỏi liên kết của đoạn',
      title2: 'Tên tài liệu được đặt làm câu hỏi liên kết của đoạn',
    },
    imageUnderstandNode: {
      label: 'Hiểu hình ảnh',
      text: 'Phân tích hình ảnh để xác định đối tượng, cảnh quan và đưa ra câu trả lời',
      answer: 'Nội dung AI',
      model: {
        label: 'Mô hình thị giác',
        requiredMessage: 'Vui lòng chọn một mô hình thị giác',
      },
      image: {
        label: 'Chọn hình ảnh',
        requiredMessage: 'Vui lòng chọn một hình ảnh',
      },
    },
    videoUnderstandNode: {
      label: 'Hiểu video',
      text: 'Xác định đối tượng, cảnh quan và thông tin khác trong video để trả lời câu hỏi người dùng',
      answer: 'Nội dung phản hồi AI',
      model: {
        label: 'Mô hình thị giác',
        requiredMessage: 'Vui lòng chọn một mô hình thị giác',
      },
      video: {
        label: 'Chọn video',
        requiredMessage: 'Vui lòng chọn một video',
      },
    },
    variableAssignNode: {
      label: 'Gán biến',
      text: 'Cập nhật giá trị của biến toàn cục',
      assign: 'Đặt giá trị',
    },
    variableAggregationNode: {
      label: 'Tổng hợp biến',
      text: 'Tổng hợp các biến của mỗi nhóm theo chiến lược tổng hợp',
      Strategy: 'Chiến lược tổng hợp',
      placeholder: 'Trả về giá trị phi null đầu tiên của mỗi nhóm',
      placeholder1: 'Trả về tập hợp các biến cho mỗi nhóm',
      group: {
        noneError: 'Tên không được để trống',
        dupError: 'Tên không được trùng lặp',
      },
      addGroup: 'Thêm nhóm',
      editGroup: 'Chỉnh sửa nhóm',
    },
    mcpNode: {
      label: 'Gọi MCP',
      text: 'Gọi các dịch vụ MCP bên ngoài để xử lý dữ liệu',
      getToolsSuccess: 'Lấy danh sách công cụ thành công',
      getTool: 'Lấy công cụ',
      toolParam: 'Tham số công cụ',
      mcpServerTip: 'Vui lòng nhập cấu hình máy chủ MCP ở định dạng JSON',
      mcpToolTip: 'Vui lòng chọn một công cụ',
      configLabel: 'Cấu hình máy chủ MCP (Chỉ hỗ trợ gọi qua SSE/Streamable HTTP)',
      reference: 'Tham chiếu MCP',
    },
    imageGenerateNode: {
      label: 'Tạo hình ảnh',
      text: 'Tạo hình ảnh dựa trên nội dung văn bản được cung cấp',
      answer: 'Nội dung AI',
      model: {
        label: 'Mô hình tạo hình ảnh',
        requiredMessage: 'Vui lòng chọn một mô hình tạo hình ảnh',
      },
      prompt: {
        label: 'Lời nhắc tích cực',
        tooltip: 'Mô tả các yếu tố và đặc điểm hình ảnh bạn muốn có trong ảnh được tạo',
      },
      negative_prompt: {
        label: 'Lời nhắc tiêu cực',
        tooltip: 'Mô tả các yếu tố bạn muốn loại trừ khỏi ảnh được tạo',
        placeholder:
          'Vui lòng mô tả nội dung bạn không muốn tạo, chẳng hạn như màu sắc, nội dung máu me',
      },
    },
    textToVideoGenerate: {
      label: 'Văn bản thành Video',
      text: 'Tạo video dựa trên nội dung văn bản được cung cấp',
      answer: 'Nội dung phản hồi AI',
      model: {
        label: 'Mô hình Văn bản thành Video',
        requiredMessage: 'Vui lòng chọn một mô hình văn bản thành video',
      },
      prompt: {
        label: 'Lời nhắc (Tích cực)',
        tooltip:
          'Lời nhắc tích cực, dùng để mô tả các yếu tố và đặc điểm hình ảnh mong đợi trong video được tạo',
      },
      negative_prompt: {
        label: 'Lời nhắc (Tiêu cực)',
        tooltip:
          'Lời nhắc tiêu cực, dùng để mô tả nội dung bạn không muốn thấy trong video, có thể hạn chế quá trình tạo video',
        placeholder:
          'Vui lòng mô tả nội dung video bạn không muốn tạo, chẳng hạn như: màu sắc, nội dung máu me',
      },
    },
    imageToVideoGenerate: {
      label: 'Hình ảnh thành Video',
      text: 'Tạo video dựa trên các hình ảnh được cung cấp',
      answer: 'Nội dung phản hồi AI',
      model: {
        label: 'Mô hình Hình ảnh thành Video',
        requiredMessage: 'Vui lòng chọn một mô hình hình ảnh thành video',
      },
      prompt: {
        label: 'Lời nhắc (Tích cực)',
        tooltip:
          'Lời nhắc tích cực, dùng để mô tả các yếu tố và đặc điểm hình ảnh mong đợi trong video được tạo',
      },
      negative_prompt: {
        label: 'Lời nhắc (Tiêu cực)',
        tooltip:
          'Lời nhắc tiêu cực, dùng để mô tả nội dung bạn không muốn thấy trong video, có thể hạn chế quá trình tạo video',
        placeholder:
          'Vui lòng mô tả nội dung video bạn không muốn tạo, chẳng hạn như: màu sắc, nội dung máu me',
      },
      first_frame: {
        label: 'Hình ảnh khung hình đầu tiên',
        requiredMessage: 'Vui lòng chọn hình ảnh khung hình đầu tiên',
      },
      last_frame: {
        label: 'Hình ảnh khung hình cuối cùng',
        requiredMessage: 'Vui lòng chọn hình ảnh khung hình cuối cùng',
      },
    },
    speechToTextNode: {
      label: 'Giọng nói thành Văn bản',
      text: 'Chuyển đổi âm thanh thành văn bản thông qua mô hình nhận dạng giọng nói',
      stt_model: {
        label: 'Mô hình nhận dạng giọng nói',
      },
      audio: {
        label: 'Chọn tệp âm thanh',
        placeholder: 'Vui lòng chọn một tệp âm thanh',
      },
    },
    textToSpeechNode: {
      label: 'Văn bản thành Giọng nói',
      text: 'Chuyển đổi văn bản thành âm thanh thông qua mô hình tổng hợp giọng nói',
      tts_model: {
        label: 'Mô hình tổng hợp giọng nói',
      },
      content: {
        label: 'Chọn nội dung văn bản',
      },
    },
    toolNode: {
      label: 'Công cụ tùy chỉnh',
      text: 'Thực thi các tập lệnh tùy chỉnh để xử lý dữ liệu',
    },
    intentNode: {
      label: 'Nút ý định (Intent)',
      text: 'Khớp câu hỏi người dùng với các phân loại ý định được người dùng định nghĩa',
      other: 'khác',
      error2: 'Ý định bị lặp lại',
      placeholder: 'Vui lòng chọn một tùy chọn phân loại',
      classify: {
        label: 'Phân loại ý định',
      },
      input: {
        label: 'Đầu vào',
      },
    },
    applicationNode: {
      label: 'Nút Agent',
    },
    loopNode: {
      label: 'Vòng lặp (Loop)',
      text: 'Lặp lại một chuỗi các tác vụ bằng cách thiết lập số lần lặp và logic',
      loopType: {
        label: 'Loại vòng lặp',
        requiredMessage: 'Vui lòng chọn một loại vòng lặp',
        arrayLoop: 'Vòng lặp mảng',
        numberLoop: 'Vòng lặp theo số lần chỉ định',
        infiniteLoop: 'Vòng lặp vô hạn',
      },
      loopNumber: {
        label: 'Số lần lặp',
        requiredMessage: 'Vui lòng nhập số lần lặp',
      },
      loopArray: {
        label: 'Mảng vòng lặp',
        requiredMessage: 'Yêu cầu mảng vòng lặp',
        placeholder: 'Vui lòng chọn một mảng vòng lặp',
      },
      loopSetting: 'Cài đặt vòng lặp',
      loopDetail: 'Chi tiết vòng lặp',
    },
    loopStartNode: {
      label: 'Bắt đầu vòng lặp',
      loopIndex: 'Chỉ số (Index)',
      loopItem: 'Phần tử vòng lặp',
    },
    loopBodyNode: {
      label: 'Thân vòng lặp',
      text: 'Thân vòng lặp',
    },
    loopContinueNode: {
      label: 'Tiếp tục',
      text: 'Dùng để kết thúc vòng lặp hiện tại và chuyển sang vòng lặp tiếp theo.',
      isContinue: 'Tiếp tục',
    },
    loopBreakNode: {
      label: 'Kết thúc (Break)',
      text: 'Chấm dứt vòng lặp hiện tại và thoát khỏi thân vòng lặp',
      isBreak: 'Kết thúc',
    },
    variableSplittingNode: {
      label: 'Chia biến',
      text: 'Bằng cách cấu hình các biểu thức JSON Path, phân tích và chia biến định dạng JSON đầu vào',
      result: 'Kết quả',
      splitVariables: 'Chia biến',
      inputVariables: 'Biến đầu vào',
      addVariables: 'Thêm biến',
      editVariables: 'Chỉnh sửa biến',
      variableListPlaceholder: 'Vui lòng thêm biến để chia',
      expression: {
        label: 'Biểu thức',
        placeholder: 'Vui lòng nhập biểu thức',
        tooltip: 'Vui lòng sử dụng biểu thức JSON Path để chia biến, ví dụ: $.store.book',
      },
    },
    parameterExtractionNode: {
      label: 'Trích xuất tham số',
      text: 'Sử dụng các mô hình AI để trích xuất các tham số có cấu trúc',
      extractParameters: {
        label: 'Trích xuất tham số',
        variableListPlaceholder: 'Vui lòng thêm các tham số trích xuất',
        parameterType: 'Loại tham số',
      },
    },
  },
  compare: {
    is_null: 'Là null',
    is_not_null: 'Không phải null',
    contain: 'Chứa',
    not_contain: 'Không chứa',
    eq: 'Bằng',
    not_eq: 'Không bằng',
    ge: 'Lớn hơn hoặc bằng',
    gt: 'Lớn hơn',
    le: 'Nhỏ hơn hoặc bằng',
    lt: 'Nhỏ hơn',
    len_eq: 'Độ dài bằng',
    len_ge: 'Độ dài lớn hơn hoặc bằng',
    len_gt: 'Độ dài lớn hơn',
    len_le: 'Độ dài nhỏ hơn hoặc bằng',
    len_lt: 'Độ dài nhỏ hơn',
    is_true: 'Là đúng',
    is_not_true: 'Không phải đúng',
  },
  SystemPromptPlaceholder: 'Lời nhắc hệ thống, có thể tham chiếu các biến trong hệ thống, chẳng hạn như',
  UserPromptPlaceholder: 'Lời nhắc người dùng, có thể tham chiếu các biến trong hệ thống, chẳng hạn như',
  initiator: 'Người khởi tạo',
  abnormalInformation: 'Thông tin bất thường',
}
