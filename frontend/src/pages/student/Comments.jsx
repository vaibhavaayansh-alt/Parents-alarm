import { useState } from 'react';
import { MessageSquare, Heart, Send, Users } from 'lucide-react';
import { COMMENTS_FEED } from '../../data/demoData';
import Badge from '../../components/ui/Badge';
import { useToast } from '../../context/ToastContext';

export default function Comments() {
  const [comments, setComments] = useState(COMMENTS_FEED);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(new Set());
  const { push } = useToast();

  const post = () => {
    if (!newComment.trim()) {
      push('Please write something first.', 'error');
      return;
    }
    const c = {
      id: Date.now(),
      author: 'Aayansh Vaibhav',
      role: 'Student',
      date: new Date().toISOString().split('T')[0],
      text: newComment,
      likes: 0,
      avatar: 'AV',
    };
    setComments([c, ...comments]);
    setNewComment('');
    push('Comment posted successfully.', 'success');
  };

  const toggleLike = (id) => {
    const s = new Set(liked);
    if (s.has(id)) s.delete(id);
    else s.add(id);
    setLiked(s);
  };

  const roleTone = {
    Parent: 'info',
    Teacher: 'warning',
    Director: 'purple',
    Student: 'success',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Comments & Feedback</h1>
        <p className="text-sm text-slate-500 mt-1">Share your thoughts with the school community</p>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: 'Total Comments', value: comments.length, tone: 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300', icon: MessageSquare },
          { label: 'Total Likes',    value: comments.reduce((a, c) => a + c.likes, 0), tone: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300', icon: Heart },
          { label: 'Contributors',   value: new Set(comments.map((c) => c.author)).size, tone: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300', icon: Users },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="card p-4 sm:p-5">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.tone}`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-500 mt-3">{s.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{s.value}</p>
            </div>
          );
        })}
      </div>

      <div className="card p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
            AV
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={3}
              placeholder="Share your thoughts..."
              className="input resize-none"
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-slate-500">Posting as Aayansh Vaibhav</p>
              <button
                onClick={post}
                className="btn-primary bg-orange-600 hover:bg-orange-700 text-sm"
              >
                <Send className="w-3.5 h-3.5" /> Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {comments.map((c) => {
          const isLiked = liked.has(c.id);
          return (
            <div key={c.id} className="card p-5 hover:shadow-card-hover transition">
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  c.role === 'Director' ? 'bg-purple-500 text-white' :
                  c.role === 'Teacher' ? 'bg-amber-500 text-white' :
                  c.role === 'Student' ? 'bg-emerald-500 text-white' :
                  'bg-gradient-to-br from-orange-500 to-orange-700 text-white'
                }`}>
                  {c.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{c.author}</p>
                    <Badge tone={roleTone[c.role] || 'neutral'}>{c.role}</Badge>
                    <span className="text-xs text-slate-400">· {c.date}</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">{c.text}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => toggleLike(c.id)}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium transition ${
                        isLiked ? 'text-rose-600' : 'text-slate-500 hover:text-rose-600'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-600' : ''}`} />
                      {c.likes + (isLiked ? 1 : 0)}
                    </button>
                    <button className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-orange-600">
                      <MessageSquare className="w-3.5 h-3.5" /> Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
              }
