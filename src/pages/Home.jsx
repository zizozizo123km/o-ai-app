import React from 'react';
import {
  Video, Image, Smile, ThumbsUp, MessageCircle, Share2, Globe, MoreHorizontal, X, User, Users, Clock, Zap, MessageSquare, Plus,
  Bookmark, Flag, TrendingUp, Calendar, Heart
} from 'lucide-react';

// --- Shared Components (In a real app, these would be separate files) ---

const Avatar = ({ src, className = 'w-10 h-10' }) => (
  <img
    className={`rounded-full object-cover bg-gray-200 ${className}`}
    src={src || "https://via.placeholder.com/150"}
    alt="Avatar"
  />
);

const StoryItem = ({ name, imageUrl, isMine }) => (
  <div className="flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden relative shadow-md cursor-pointer group">
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition" />

    {isMine ? (
      <div className="absolute top-3 left-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
        <Plus className="w-4 h-4 text-white" />
      </div>
    ) : (
      <Avatar src={imageUrl} className="absolute top-3 left-3 w-8 h-8 border-4 border-blue-500" />
    )}

    <p className="absolute bottom-2 right-2 text-white font-semibold text-xs text-shadow" style={{ direction: 'rtl' }}>
      {name}
    </p>
  </div>
);

const StatusCreator = () => {
  const Button = ({ Icon, label, color }) => (
    <button className={`flex items-center justify-center flex-1 p-2 space-x-2 rounded-lg transition hover:bg-gray-100 text-sm ${color}`}>
      <Icon className="w-5 h-5" />
      <span className="font-medium" style={{ direction: 'rtl' }}>{label}</span>
    </button>
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 border border-gray-200">
      <div className="flex space-x-3 pb-3 border-b border-gray-200">
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <input
          type="text"
          placeholder="ماذا يجري يا محمد؟"
          style={{ direction: 'rtl' }}
          className="flex-1 bg-gray-100 rounded-full py-2 px-4 focus:outline-none placeholder-gray-500 text-right"
        />
      </div>

      <div className="mt-3 flex justify-around rtl:space-x-reverse space-x-2">
        <Button Icon={Video} label="فيديو مباشر" color="text-red-500" />
        <Button Icon={Image} label="صورة/فيديو" color="text-green-500" />
        <Button Icon={Smile} label="حالة/مزاج" color="text-yellow-500" />
      </div>
    </div>
  );
};

const PostItem = ({ post }) => {
  const ActionButton = ({ Icon, label }) => (
    <button className="flex items-center justify-center flex-1 p-2 space-x-2 text-gray-600 rounded-lg hover:bg-gray-100 transition rtl:space-x-reverse">
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm hidden sm:inline" style={{ direction: 'rtl' }}>{label}</span>
    </button>
  );

  return (
    <div className="bg-white rounded-xl shadow-md mb-4 border border-gray-200">
      {/* Post Header */}
      <div className="p-4 flex justify-between items-center rtl:space-x-reverse space-x-3">
        <div className="flex items-center rtl:space-x-reverse space-x-3">
          <Avatar src={post.avatar} />
          <div className="text-right">
            <p className="font-bold text-gray-900">{post.author}</p>
            <div className="flex items-center text-xs text-gray-500 rtl:space-x-reverse space-x-1">
              <p>{post.time}</p>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-900" />
          <X className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-900" />
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 text-base leading-relaxed text-right" style={{ direction: 'rtl' }}>
          {post.text}
        </p>
      </div>
      
      {post.image && (
        <div className="bg-gray-100">
          <img src={post.image} alt="Post content" className="w-full object-cover" />
        </div>
      )}

      {/* Post Stats */}
      <div className="flex justify-between items-center p-3 border-b border-gray-200 mx-4 rtl:space-x-reverse space-x-2">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <div className="flex -space-x-1">
            <Heart className="w-4 h-4 text-red-500 bg-white border border-white rounded-full p-0.5" fill="red" />
            <ThumbsUp className="w-4 h-4 text-blue-500 bg-white border border-white rounded-full p-0.5" fill="blue" />
          </div>
          <span className="text-sm text-gray-600 text-right" style={{ direction: 'rtl' }}>{post.likes}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 rtl:space-x-reverse space-x-3">
          <span style={{ direction: 'rtl' }}>{post.shares} مشاركات</span>
          <span style={{ direction: 'rtl' }}>{post.comments} تعليقات</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex p-1">
        <ActionButton Icon={ThumbsUp} label="إعجاب" />
        <ActionButton Icon={MessageCircle} label="تعليق" />
        <ActionButton Icon={Share2} label="مشاركة" />
      </div>
    </div>
  );
};


// --- Mock Data ---

const MOCK_STORIES = [
  { id: 1, name: 'إنشاء قصة', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', isMine: true },
  { id: 2, name: 'أحمد', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', isMine: false },
  { id: 3, name: 'سارة خالد', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', isMine: false },
  { id: 4, name: 'علياء', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', isMine: false },
  { id: 5, name: 'فاطمة', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', isMine: false },
];

const MOCK_POSTS = [
  {
    id: 1,
    author: 'صفحة الأخبار العاجلة',
    avatar: 'https://i.pravatar.cc/150?img=5',
    time: '2 ساعة',
    text: 'لقد تم إطلاق تحديث جديد لتطبيق فيسبوك يتضمن تحسينات كبيرة في سرعة التحميل وواجهة المستخدم. ننصح جميع المستخدمين بالتحديث فوراً لتجربة الميزات الجديدة.',
    image: null,
    likes: '1.2 ألف',
    comments: 250,
    shares: 80
  },
  {
    id: 2,
    author: 'مها عبد الله',
    avatar: 'https://i.pravatar.cc/150?img=15',
    time: '45 دقيقة',
    text: 'يا له من يوم جميل! قضاء بعض الوقت في الطبيعة يجدد الروح. هل قمتم بزيارة أي مكان جميل مؤخراً؟ شاركوني صوركم!',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop',
    likes: '450',
    comments: 60,
    shares: 15
  },
  {
    id: 3,
    author: 'التقنية الحديثة',
    avatar: 'https://i.pravatar.cc/150?img=20',
    time: '1 يوم',
    text: 'هل تعتقدون أن الذكاء الاصطناعي سيحل محل المبرمجين في السنوات القادمة؟ نقاش مفتوح حول مستقبل تطوير الويب.',
    image: null,
    likes: '7.8 ألف',
    comments: 1200,
    shares: 350
  }
];


// --- Main Home Component ---

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-4" dir="rtl">
      {/* Container simulating Facebook's centered feed width */}
      <div className="max-w-3xl mx-auto px-4 lg:px-0">
        
        {/* Stories Section */}
        <div className="mb-4 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-3 pb-2 rtl:space-x-reverse">
            {MOCK_STORIES.map(story => (
              <StoryItem key={story.id} {...story} />
            ))}
          </div>
        </div>
        
        {/* Status Creator */}
        <StatusCreator />

        {/* The Feed */}
        <div className="space-y-4">
          {MOCK_POSTS.map(post => (
            <PostItem key={post.id} post={post} />
          ))}

          {/* Placeholder for more posts */}
          <div className="text-center py-8 text-gray-500">
            <Clock className="w-6 h-6 mx-auto mb-2" />
            <p>جارٍ تحميل المزيد من المنشورات...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;