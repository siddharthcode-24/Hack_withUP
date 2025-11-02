async function uploadImage(file) {
    const { data, error } = await supabase.storage
        .from('gallery-images')
        .upload(`public/${Date.now()}-${file.name}`, file);
    return { data, error };
}
async function addGallery(title, description, icon) {
    const { data, error } = await supabase
        .from('galleries')
        .insert([
            { title, description, icon, badge_text: 'New' }
        ]);
    return { data, error };
}